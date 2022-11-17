import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivationRequest} from "../../../models/ActivationRequest";
import {environment} from "../../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(private http: HttpClient) {
  }

  activateAccount(confirmation: ActivationRequest): Observable<any> {
    return this.http.patch(`${environment.backendServerUrl}${environment.confirmRegistrationPath}`, confirmation, httpOptions);
  }

}
