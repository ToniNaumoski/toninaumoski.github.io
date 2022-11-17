import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginRequest} from "../../../models/LoginRequest";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public currentUser: Observable<LoginRequest>;
  // TODO: change LoginRequest in user Object because the request return the user information.
  private currentUserSubject: BehaviorSubject<LoginRequest>;
  private readonly JWT_TOKEN = 'token';
  private readonly REFRESH_TOKEN = 'refresh_token';


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginRequest>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginRequest {
    return this.currentUserSubject.value;
  }

  login(login: LoginRequest): Observable<any> {
    //httpOptions.headers = (new HttpHeaders({'eee':''})) ;
    return this.http.post<any>(`${environment.backendServerUrl}${environment.loginAuthenticationUrl}`, login, httpOptions).pipe(
      map(data => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(this.JWT_TOKEN, data.jwt_token);
        localStorage.setItem(this.REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        console.log("is User Logged: "+ this.isLoggedIn());
        return data;
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


  isLoggedIn(){
    return localStorage.getItem(this.JWT_TOKEN) !== null && localStorage.getItem(this.REFRESH_TOKEN)!==null && localStorage.getItem(this.REFRESH_TOKEN)!==null;
  }
}
