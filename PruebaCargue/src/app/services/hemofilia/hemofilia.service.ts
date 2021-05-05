import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import keys from '../../../keys'
import {Hemofilia} from '../../models/hemofilia'

@Injectable({
  providedIn: 'root'
})
export class HemofiliaService {

  API_URI = keys.api.API_URI + '/hemofilia';
  constructor(private http:HttpClient) { }

  CargarTipodocumento(){
    return this.http.get(`${this.API_URI}`)
  }
  CargarSexo(){
    return this.http.get(`${this.API_URI}/sexo`)
  }
  CargarRegimenAfiliacion(){
    return this.http.get(`${this.API_URI}/regimen`)
  }
  CargarcodigoPertenenciaetnica(){
    return this.http.get(`${this.API_URI}/petnica`)
  }
  Cargargrupopoblacional(){
    return this.http.get(`${this.API_URI}/gpoblacion`)
  }
  CargarEstadogestionfechacorte(){
    return this.http.get(`${this.API_URI}/gestacionfechacorte`)
  }
  CargarUsarioProgramaconsegeria(){
    return this.http.get(`${this.API_URI}/planificacionconsegeria`)
  }
  Cargarmotivopruebadiagnostico(){
    return this.http.get(`${this.API_URI}/motivopruebadiagnostico`)
  }
  CarTipofrecuenciaDiagnostico(){
    return this.http.get(`${this.API_URI}/tipofrecuenciadiagnostico`)
  }
  CargarClasificacionSeveridadNF(){
    return this.http.get(`${this.API_URI}/clasificacionseveridad`)
  }
  CargarAFAsociadohemofilia(){
    return this.http.get(`${this.API_URI}/afaasociadohemofilia`)
  }
  CargarFactorrecibido(){
    return this.http.get(`${this.API_URI}/factorrecibido`)
  }
  CargarEsquema(){
    return this.http.get(`${this.API_URI}/esquemaantecedentes`)
  }
  CargarFacorRecibidoTA(){
    return this.http.get(`${this.API_URI}/factorrecibidota`)
  }

  CargarEsquemaTA(){
    return this.http.get(`${this.API_URI}/esquemata`)
  }

  CargarFrecuenciaSemana(){
    return this.http.get(`${this.API_URI}/frecuenciasemana`)
  }

  CargarModalidadapltratamiento(){
    return this.http.get(`${this.API_URI}/modalidadtratamiento`)
  }

  CargarviaAdministración(){
    return this.http.get(`${this.API_URI}/viaadministracion`)
  }
  CargarProfesionallieratenciondelpaciente(){
    return this.http.get(`${this.API_URI}/profecionalliderspaciente`)
  }
  Cargarhermatosis(){
    return this.http.get(`${this.API_URI}/hermatosis`)
  }
  CargarPresenciainhibidorfechacorte(){
    return this.http.get(`${this.API_URI}/presenciaifechacorte`)
  }
  CargarPacienteITI(){
    return this.http.get(`${this.API_URI}/pacienteiti`)
  }
  recibioiti(){
    return this.http.get(`${this.API_URI}/recibioiti`)
  }
  CargarArtropiahermofilicacronica(){
    return this.http.get(`${this.API_URI}/artropicronica`)
  }
  CargarInfectadoporVHC(){
    return this.http.get(`${this.API_URI}/vhc`)
  }
  CargarInfectadoporVHB(){
    return this.http.get(`${this.API_URI}/vhb`)
  }
  CargarInfectadoporVIH(){
    return this.http.get(`${this.API_URI}/vih`)
  }
  CargarPseudotumores(){
    return this.http.get(`${this.API_URI}/Pseudotumores`)
  }
  CargarFracturas(){
    return this.http.get(`${this.API_URI}/fracturas`)
  }
  CargarAnafilaxis(){
    return this.http.get(`${this.API_URI}/anafilaxis`)
  }
  CargarNovedad(){
    return this.http.get(`${this.API_URI}/novedad`)
  }
  Cargarcausademuerte(){
    return this.http.get(`${this.API_URI}/causanuerte`)
  }
  CargarMunicipioresidencia(){
    return this.http.get(`${this.API_URI}/ciudad`,)
  }
  Codigovalidohabilitacionips(){
    return this.http.get(`${this.API_URI}/codigovalidoips`)
  }
  CodigoCUM35363738(){
    return this.http.get(`${this.API_URI}/cum`)
  }

  CargarOcupacion(){
    return this.http.get(`${this.API_URI}/ocupacion`)
  }

  CargarRegistrohemofilia(){
    return this.http.get(`${this.API_URI}/cargarregistrohemofilia`)
  }

  Guardarhemofilia(Hemofilia:Hemofilia){
    return this.http.post(`${this.API_URI}/`, Hemofilia)
  }
  




}
