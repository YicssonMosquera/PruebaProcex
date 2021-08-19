import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { Cancer } from 'src/app/models/cancer';

@Injectable({
  providedIn: 'root'
})
export class CACCancerServiceService {
  API_URI = keys.api.API_URI + '/cancer';
  API_URI2 = keys.api.API_URI + '/cancervalidar';

  constructor(private http: HttpClient) { }

  GuardarCancer(Cancer: Cancer) {
    return this.http.post(`${this.API_URI}/`, Cancer)
  }

  ActualizarRegistro(Campo_6: Cancer, cancer: Cancer) {
    return this.http.put(`${this.API_URI}/update/${Campo_6}`, cancer)
  }

  CargarRegistrocancer(Tipodocumento, numerodocumeto, page, row) {
    const cargar = { Tipodocumento, numerodocumeto, page, row }
    return this.http.post(`${this.API_URI}/cargarregistrocancer`, cargar)
  }

  CargarIdentificacion(Campo_6) {
    return this.http.get(`${this.API_URI}/${Campo_6}`)
  }

  numeroRegistro() {
    return this.http.get(`${this.API_URI}/numeroRegistro/cancer`)
  }

  GuardarCancerValidacion(Cancer: Cancer) {
    return this.http.post(`${this.API_URI2}/validar`, Cancer)
  }

  validarRegistrosEdit(Campo_6: Cancer, Cancer: Cancer){
    return this.http.put(`${this.API_URI2}/validar/${Campo_6}`, Cancer)
  }

  CargarAfiliado(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/afiliado_Cancer`, guardar)
  }

  CargarCAC(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/CAC_Cancer`, guardar)
  }


}
