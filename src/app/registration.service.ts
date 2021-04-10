import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

public loginUserFromremote(user : User):Observable<any>{
return this.http.post<any>("http://localhost:8090/api/v1.0/tweets/login",user)
}

public registerUserFromremote(user : User):Observable<any>{
  return this.http.post<any>("http://localhost:8090/api/v1.0/tweets/register",user)
  }
}
