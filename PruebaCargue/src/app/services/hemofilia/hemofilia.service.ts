import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { Hemofilia } from '../../models/cargahemofilia'

@Injectable({
  providedIn: 'root'
})
export class HemofiliaService {

  API_URI = keys.api.API_URI + '/hemofilia';
  API_URI2 = keys.api.API_URI + '/carguehemofilia';
  constructor(private http: HttpClient) { }

  CargarTipodocumento() {
    return this.http.get(`${this.API_URI}`)
  }
  CargarSexo() {
    return this.http.get(`${this.API_URI}/sexo`)
  }
  CargarRegimenAfiliacion() {
    return this.http.get(`${this.API_URI}/regimen`)
  }
  CargarcodigoPertenenciaetnica() {
    return this.http.get(`${this.API_URI}/petnica`)
  }
  Cargargrupopoblacional() {
    return this.http.get(`${this.API_URI}/gpoblacion`)
  }
  CargarEstadogestionfechacorte() {
    return this.http.get(`${this.API_URI}/gestacionfechacorte`)
  }
  CargarUsarioProgramaconsegeria() {
    return this.http.get(`${this.API_URI}/planificacionconsegeria`)
  }
  Cargarmotivopruebadiagnostico() {
    return this.http.get(`${this.API_URI}/motivopruebadiagnostico`)
  }
  CarTipofrecuenciaDiagnostico() {
    return this.http.get(`${this.API_URI}/tipofrecuenciadiagnostico`)
  }
  CargarClasificacionSeveridadNF() {
    return this.http.get(`${this.API_URI}/clasificacionseveridad`)
  }
  CargarAFAsociadohemofilia() {
    return this.http.get(`${this.API_URI}/afaasociadohemofilia`)
  }
  CargarFactorrecibido() {
    return this.http.get(`${this.API_URI}/factorrecibido`)
  }
  CargarEsquema() {
    return this.http.get(`${this.API_URI}/esquemaantecedentes`)
  }
  CargarFacorRecibidoTA() {
    return this.http.get(`${this.API_URI}/factorrecibidota`)
  }

  CargarEsquemaTA() {
    return this.http.get(`${this.API_URI}/esquemata`)
  }

  CargarFrecuenciaSemana() {
    return this.http.get(`${this.API_URI}/frecuenciasemana`)
  }

  CargarModalidadapltratamiento() {
    return this.http.get(`${this.API_URI}/modalidadtratamiento`)
  }

  CargarviaAdministración() {
    return this.http.get(`${this.API_URI}/viaadministracion`)
  }
  CargarProfesionallieratenciondelpaciente() {
    return this.http.get(`${this.API_URI}/profecionalliderspaciente`)
  }
  Cargarhermatosis() {
    return this.http.get(`${this.API_URI}/hermatosis`)
  }
  CargarPresenciainhibidorfechacorte() {
    return this.http.get(`${this.API_URI}/presenciaifechacorte`)
  }
  CargarPacienteITI() {
    return this.http.get(`${this.API_URI}/pacienteiti`)
  }
  recibioiti() {
    return this.http.get(`${this.API_URI}/recibioiti`)
  }
  CargarArtropiahermofilicacronica() {
    return this.http.get(`${this.API_URI}/artropicronica`)
  }
  CargarInfectadoporVHC() {
    return this.http.get(`${this.API_URI}/vhc`)
  }
  CargarInfectadoporVHB() {
    return this.http.get(`${this.API_URI}/vhb`)
  }
  CargarInfectadoporVIH() {
    return this.http.get(`${this.API_URI}/vih`)
  }
  CargarPseudotumores() {
    return this.http.get(`${this.API_URI}/Pseudotumores`)
  }
  CargarFracturas() {
    return this.http.get(`${this.API_URI}/fracturas`)
  }
  CargarAnafilaxis() {
    return this.http.get(`${this.API_URI}/anafilaxis`)
  }
  CargarNovedad() {
    return this.http.get(`${this.API_URI}/novedad`)
  }
  Cargarcausademuerte() {
    return this.http.get(`${this.API_URI}/causanuerte`)
  }
  CargarMunicipioresidencia() {
    return this.http.get(`${this.API_URI}/ciudad`,)
  }
  Codigovalidohabilitacionips() {
    return this.http.get(`${this.API_URI}/codigovalidoips`)
  }
  CodigoCUM35363738() {
    return this.http.get(`${this.API_URI}/cum`)
  }

  CargarOcupacion() {
    return this.http.get(`${this.API_URI}/ocupacion`)
  }

  CargarRegistrohemofilia(Tipodocumento,numerodocumeto,VALIDACION_SOPORTE,VALIDACION_REGISTRO, page, row ) {
    const cargar = {Tipodocumento,numerodocumeto,VALIDACION_SOPORTE,VALIDACION_REGISTRO, page, row}
    return this.http.post(`${this.API_URI}/cargarregistrohemofilia`, cargar)
  }
  CargarRegistrohemofilia3(Campo_6: any) {
    return this.http.get(`${this.API_URI}/${Campo_6}`)
  }

  cargamasivahemofilia(file: File, User: string, perfil:string) {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('User', User);
    fd.append('perfil', perfil);
    return this.http.post(`${this.API_URI2}/guardarHMFile`, fd)
  }

  consultarCargue(page,row,radicado,nombreArchvio,vigente,estado) {
    const cargar = {page,row,radicado,nombreArchvio,vigente,estado}
    return this.http.post(`${this.API_URI2}/`, cargar)
  }

  consultarNombreArchivo() {
    return this.http.get(`${this.API_URI2}/`)
  }
  numeroRegstro() {
    return this.http.get(`${this.API_URI}/numeroRegistro/Registro`)
  }

  consultarUltimoArchivoCargado(ID_PROCESO_HEMOFILIA){
    return this.http.get(`${this.API_URI2}/archivocargado/${ID_PROCESO_HEMOFILIA}`)
  }



}
