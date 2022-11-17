import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PasswordResetRequest} from "../../../models/PasswordResetRequest";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) { }

  resetPassword(email: string): Observable<any>{
    return this.http.post(`${environment.backendServerUrl}${environment.resetPasswordPath}`, email, httpOptions) ;
  }

  validateToken(token: string): Observable<any>{
    return this.http.get(`${environment.backendServerUrl}${environment.validateTokenPath}?token=${token}`, httpOptions);
  }
  upgradePassword(passwordResetRequest: PasswordResetRequest): Observable<any>{
    return this.http.post(`${environment.backendServerUrl}${environment.changePasswordPath}`, passwordResetRequest, httpOptions);
  }
}
