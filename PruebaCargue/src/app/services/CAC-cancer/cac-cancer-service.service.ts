import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { Cancer } from 'src/app/models/cancer';

@Injectable({
  providedIn: 'root'
})
export class CACCancerServiceService {
  API_URI = keys.api.API_URI + '/cancer';

  constructor(private http: HttpClient) { }

  GuardarCancer(Cancer: Cancer) {
    console.log('si entra ruta');
    console.log(this.API_URI);
    return this.http.post(`${this.API_URI}/`, Cancer)
  }

  ActualizarRegistro(Campo_6: Cancer, cancer: Cancer) {
    return this.http.put(`${this.API_URI}/update/${Campo_6}`, cancer)
  }

  CargarRegistrocancer(Tipodocumento,numerodocumeto, page, row ) {
    const cargar = {Tipodocumento,numerodocumeto, page, row}
    return this.http.post(`${this.API_URI}/cargarregistrocancer`, cargar)
  }

  CargarIdentificacion(Campo_6) {
    return this.http.get(`${this.API_URI}/${Campo_6}`)
  }

  numeroRegistro() {
    return this.http.get(`${this.API_URI}/numeroRegistro/cancer`)
  }



}
