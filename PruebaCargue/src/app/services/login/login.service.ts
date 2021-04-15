import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import keys from '../../../keys'
import { Observable } from 'rxjs/internal/Observable';
import {Usuario} from '../../models/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI = keys.api.API_URI + '/login';
  headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(private httpClient:HttpClient) { }

  loginUser(PKUsuario: string, Contraseña: string): Observable<any> {
    return this.httpClient.post(`${this.API_URI}`, { PKUsuario, Contraseña });
  };

  setUser(user:string, token:string) {
    user = JSON.stringify(user)
    localStorage.setItem("access_token", token);
    localStorage.setItem("currentUser", user);
  };
}
