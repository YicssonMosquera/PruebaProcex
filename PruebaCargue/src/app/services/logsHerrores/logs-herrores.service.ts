import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class LogsHerroresService {

  API_URI = keys.api.API_URI + '/logsherrores';

  constructor(private http: HttpClient) { }

  cargarLogsHerrores(NUMERO_RADICACION){
    return this.http.get(`${this.API_URI}/herroresexcel/${NUMERO_RADICACION}`)
  }

}
