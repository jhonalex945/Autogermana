import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginRequest } from 'src/app/Models/LoginRequest';
import { ILoginResponse } from 'src/app/Models/LoginResponse';
import { urlLogin } from '../constantes'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  Login(form:ILoginRequest): Observable<ILoginResponse>{    
    return this.http.post<ILoginResponse>(urlLogin, form);
  }
}
