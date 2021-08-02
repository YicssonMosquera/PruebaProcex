import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ERC} from '../../models/erc'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class CuentaErcService {
  API_URI = keys.api.API_URI + '/erc';
 
  constructor(private http: HttpClient) { }

  GuardarErc(artritis: ERC) {
    return this.http.post(`${this.API_URI}/almacenar`, artritis)
  }

  consultarDatos(page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo) {
    const cargar = {page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo}
    return this.http.post(`${this.API_URI}/consultar`, cargar)
  }

  getOne(C8_CAMPO_9) {
    return this.http.get(`${this.API_URI}/${C8_CAMPO_9}`)
  }
  ActualizarDatos(C8_CAMPO_9, artritis: ERC) {
    return this.http.put(`${this.API_URI}/${C8_CAMPO_9}`, artritis)
  }
}
