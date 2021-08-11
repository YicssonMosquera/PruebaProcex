import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ARTRITIS } from '../../models/artritis'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class CACArtritisService {
  API_URI = keys.api.API_URI + '/artritis';

  constructor(private http: HttpClient) { }

  GuardarArtritis(artritis: ARTRITIS) {
    return this.http.post(`${this.API_URI}/almacenar`, artritis)
  }

  consultarDatos(page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion) {
    const cargar = { page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion }
    return this.http.post(`${this.API_URI}/consultar`, cargar)
  }

  getOne(CAMPO_9) {
    return this.http.get(`${this.API_URI}/${CAMPO_9}`)
  }
  ActualizarDatos(CAMPO_9, artritis: ARTRITIS) {
    return this.http.put(`${this.API_URI}/${CAMPO_9}`, artritis)
  }
}
