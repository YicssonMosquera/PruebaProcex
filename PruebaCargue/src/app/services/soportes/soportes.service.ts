import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import keys from '../../../keys'
import {Soportes} from '../../models/soporte'

@Injectable({
  providedIn: 'root'
})
export class SoportesService {
  API_URI = keys.api.API_URI + '/soportes';
  constructor(private http:HttpClient) { }

  crearfoto(Nombre_Archivo:string,Usuariocargue:string,Anulado:string,Fecha_anulacion:string, 
    Usuario_anulacion:string,Observaciones_anulacion:string,Entregable:string, Tipo_archivo:string, soporte:File){
    const fd = new FormData();
    fd.append('Nombre_Archivo',Nombre_Archivo);
    fd.append('Usuariocargue',Usuariocargue);
    fd.append('Anulado',Anulado);
    fd.append('Fecha_anulacion',Fecha_anulacion);
    fd.append('Usuario_anulacion',Usuario_anulacion);
    fd.append('Observaciones_anulacion',Observaciones_anulacion);
    fd.append('Entregable',Entregable);
    fd.append('Tipo_archivo',Tipo_archivo);
    fd.append('soporte', soporte)
    return  this.http.post(`${this.API_URI}`, fd );
   }
}
