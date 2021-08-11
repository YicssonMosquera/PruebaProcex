import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class LogsErroresCancerService {
  API_URI = keys.api.API_URI + '/LogsErroresCancer';

  constructor(private http: HttpClient) { }

  cargarErroresFrm(CAMPO_6){
    return this.http.get(`${this.API_URI}/erroresFrm/${CAMPO_6}`)
  }
}
