import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ARTRITIS } from '../../models/artritis'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class CACArtritisService {
  API_URI = keys.api.API_URI + '/artritis';
  API_URI2 = keys.api.API_URI + '/artritisvalidar';

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

  GuardarArtritisValidacion(artritis: ARTRITIS) {
    return this.http.post(`${this.API_URI2}/validar`, artritis)
  }

  validarRegistrosEdit(CAMPO_9: ARTRITIS, artritis: ARTRITIS){
    return this.http.put(`${this.API_URI2}/validar/${CAMPO_9}`, artritis)
  }
  CargarAfiliado(Campo_9, Campo_8) {
    const guardar = { Campo_9, Campo_8 }
    return this.http.post(`${this.API_URI}/afiliado_Artritis`, guardar)
  }
  CargarCAC(Campo_9, Campo_8) {
    const guardar = { Campo_9, Campo_8 }
    return this.http.post(`${this.API_URI}/CAC_Artritis`, guardar)
  }


}
