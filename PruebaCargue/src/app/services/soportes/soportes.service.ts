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

  Guardarsoporte(Nombre_Archivo:string,Usuariocargue:string, Tipo_archivo:string, Documento_hemofilia:string, soporte:File){
    const fd = new FormData();
    fd.append('Nombre_Archivo',Nombre_Archivo);
    fd.append('Usuariocargue',Usuariocargue);
    fd.append('Anulado','');
    fd.append('Fecha_anulacion','');
    fd.append('Usuario_anulacion','');
    fd.append('Observaciones_anulacion','');
    fd.append('Entregable','');
    fd.append('Tipo_archivo',Tipo_archivo);
    fd.append('Documento_hemofilia',Documento_hemofilia);
    fd.append('soporte', soporte)
    console.log(fd)
    return  this.http.post(`${this.API_URI}`, fd );

   }

   Cargarsoportes(Documento_hemofilia,nombreArchivo,tipoArchivo,Anulado,page,row){
     const cargar = {Documento_hemofilia,nombreArchivo,tipoArchivo,Anulado,page,row}
    return this.http.post(`${this.API_URI}/soporte`,cargar)
   }

   numeroRegistro(Documento_hemofilia){
    return this.http.get(`${this.API_URI}/${Documento_hemofilia}`)
   }


}
