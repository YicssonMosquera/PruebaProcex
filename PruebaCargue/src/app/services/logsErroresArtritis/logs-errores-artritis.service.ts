import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class LogsErroresArtritisService {
  API_URI = keys.api.API_URI + '/LogsErroresArtritis';


  constructor(private http: HttpClient) { }
  
  cargarErroresFrm(CAMPO_9){
    return this.http.get(`${this.API_URI}/erroresFrm/${CAMPO_9}`)
  }
}
