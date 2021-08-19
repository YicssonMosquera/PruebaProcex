import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { Hemofilia } from '../../models/cargahemofilia'

@Injectable({
  providedIn: 'root'
})
export class CACHemofiliaService {

  API_URI = keys.api.API_URI + '/hemofilivalidar';
  constructor(private http: HttpClient) { }

  validarRegistros(hemofilia:Hemofilia){
    return this.http.post(`${this.API_URI}/`, hemofilia)
  }

  ActualizarRegistro(Campo_6: Hemofilia, Hemofilia: Hemofilia) {
    return this.http.put(`${this.API_URI}/update/${Campo_6}`, Hemofilia)
  }
  Guardarhemofilia(Hemofilia: Hemofilia) {
    return this.http.post(`${this.API_URI}/guardar`, Hemofilia)
  }

  validarRegistrosEdit(Campo_6: Hemofilia, Hemofilia: Hemofilia){
    return this.http.put(`${this.API_URI}/validar/${Campo_6}`, Hemofilia)
  }

  CargarAfiliado(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/afiliado_Hemofilia`, guardar)
  }
  CargarCAC(Campo_6,Campo_5) {
    const guardar = { Campo_6, Campo_5 } 
    return this.http.post(`${this.API_URI}/CAC_Hemofilia`, guardar)
  }


}
