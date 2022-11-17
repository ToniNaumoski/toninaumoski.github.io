import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationRequest} from "../../../models/RegistrationRequest";
import {environment} from "../../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  sendRegistration(registration: RegistrationRequest): Observable<any> {
    return this.http.post(`${environment.backendServerUrl}${environment.sendRegistrationPath}`, registration, httpOptions);
  }
}
