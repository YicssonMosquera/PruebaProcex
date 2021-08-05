import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class LogsHerroresService {

  API_URI = keys.api.API_URI + '/logsErrores';

  constructor(private http: HttpClient) { }

  cargarLogsErrores(NUMERO_RADICACION){
    return this.http.get(`${this.API_URI}/erroresexcel/${NUMERO_RADICACION}`)
  }

  cargarErroresFrm(CAMPO_6){
    return this.http.get(`${this.API_URI}/erroresFrm/${CAMPO_6}`)
  }

}
