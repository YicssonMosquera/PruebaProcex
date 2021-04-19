import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import keys from '../../../keys'
import { Res4505} from '../../models/Res4505'
import {excel} from '../../models/datos'
@Injectable({
  providedIn: 'root'
})
export class Res4505Service {
  API_URI = keys.api.API_URI + '/4505';
  constructor(private http:HttpClient) { }

  Guardar4505(res4505:Res4505){
    return this.http.post(`${this.API_URI}`, res4505)
  }

  Guardarexcel(excel:excel){
    return this.http.post(`${this.API_URI}/prueba`, excel)
  }
  CargarDatos(){
    return this.http.get(`${this.API_URI}`)
  }
}
