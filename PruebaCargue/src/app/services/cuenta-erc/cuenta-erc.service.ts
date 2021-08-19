import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ERC} from '../../models/erc'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class CuentaErcService {
  API_URI = keys.api.API_URI + '/erc';
  API_URI2 = keys.api.API_URI + '/ercvalidar';
 
  constructor(private http: HttpClient) { }

  GuardarErc(artritis: ERC) {
    return this.http.post(`${this.API_URI}/almacenar`, artritis)
  }

  consultarDatos(page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo) {
    const cargar = {page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo}
    return this.http.post(`${this.API_URI}/consultar`, cargar)
  }

  getOne(CAMPO_6) {
    return this.http.get(`${this.API_URI}/${CAMPO_6}`)
  }
  ActualizarDatos(CAMPO_6, ERC: ERC) {
    return this.http.put(`${this.API_URI}/${CAMPO_6}`, ERC)
  }

  GuardarErcValidacion(ERC: ERC) {
    return this.http.post(`${this.API_URI2}/validar`, ERC)
  }

  validarRegistrosEdit(CAMPO_6: ERC, ERC: ERC){
    return this.http.put(`${this.API_URI2}/validar/${CAMPO_6}`, ERC)
  }

  CargarAfiliado(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/afiliado_ERC`, guardar)
  }
  CargarCAC(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/CAC_Erc`, guardar)
  }


}
