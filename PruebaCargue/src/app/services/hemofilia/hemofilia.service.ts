import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import keys from '../../../keys'
import {Hemofilia} from '../../models/cargahemofilia'

@Injectable({
  providedIn: 'root'
})
export class HemofiliaService {

  API_URI = keys.api.API_URI + '/hemofilia';
  API_URI2 = keys.api.API_URI + '/carguehemofilia';
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
  CargarRegistrohemofilia3(Campo_6:any){
    return this.http.get(`${this.API_URI}/${Campo_6}`)
  }

  Guardarhemofilia(Hemofilia:Hemofilia){
    return this.http.post(`${this.API_URI}/`, Hemofilia)
  }

  ActualizarRegistro(Campo_6:Hemofilia, Hemofilia:Hemofilia){
    return this.http.put(`${this.API_URI}/update/${Campo_6}`, Hemofilia)
  }

  cargamasivahemofilia(arrayHemofilia,hemofiliaFile:File,NombreArchivo:string,Longitud:string){
    const formData: FormData = new FormData();
    formData.append('file', hemofiliaFile, hemofiliaFile.name);
    // const fd = new FormData();
    // fd.append('CAMPO_1',Hemofilia.CAMPO_1);
    // fd.append('CAMPO_2',Hemofilia.CAMPO_2);
    // fd.append('CAMPO_3',Hemofilia.CAMPO_3);
    // fd.append('CAMPO_4',Hemofilia.CAMPO_4);
    // fd.append('CAMPO_5',Hemofilia.CAMPO_5);
    // fd.append('CAMPO_6',Hemofilia.CAMPO_6);
    // fd.append('CAMPO_7',Hemofilia.CAMPO_7);
    // fd.append('CAMPO_8',Hemofilia.CAMPO_8);
    // fd.append('CAMPO_9',Hemofilia.CAMPO_9);
    // fd.append('CAMPO_10',Hemofilia.CAMPO_10);
    // fd.append('CAMPO_11',Hemofilia.CAMPO_11);
    // fd.append('CAMPO_12',Hemofilia.CAMPO_12);
    // fd.append('CAMPO_13',Hemofilia.CAMPO_13);
    // fd.append('CAMPO_14',Hemofilia.CAMPO_14);
    // fd.append('CAMPO_15',Hemofilia.CAMPO_15);
    // fd.append('CAMPO_16',Hemofilia.CAMPO_16);
    // fd.append('CAMPO_17',Hemofilia.CAMPO_17);
    // fd.append('CAMPO_18',Hemofilia.CAMPO_18);
    // fd.append('CAMPO_19',Hemofilia.CAMPO_19);
    // fd.append('CAMPO_20',Hemofilia.CAMPO_20);
    // fd.append('CAMPO_21',Hemofilia.CAMPO_21);
    // fd.append('CAMPO_22',Hemofilia.CAMPO_22);
    // fd.append('CAMPO_23',Hemofilia.CAMPO_23);
    // fd.append('CAMPO_24',Hemofilia.CAMPO_24);
    // fd.append('CAMPO_25',Hemofilia.CAMPO_25);
    // fd.append('CAMPO_26',Hemofilia.CAMPO_26);
    // fd.append('CAMPO_27',Hemofilia.CAMPO_27);
    // fd.append('CAMPO_28',Hemofilia.CAMPO_28);
    // fd.append('CAMPO_29',Hemofilia.CAMPO_29);
    // fd.append('CAMPO_30',Hemofilia.CAMPO_30);
    // fd.append('CAMPO_31',Hemofilia.CAMPO_31);
    // fd.append('CAMPO_32',Hemofilia.CAMPO_32);
    // fd.append('CAMPO_32_1',Hemofilia.CAMPO_32_1);
    // fd.append('CAMPO_32_2',Hemofilia.CAMPO_32_2);
    // fd.append('CAMPO_32_3',Hemofilia.CAMPO_32_3);
    // fd.append('CAMPO_32_4',Hemofilia.CAMPO_32_4);
    // fd.append('CAMPO_33',Hemofilia.CAMPO_33);
    // fd.append('CAMPO_34',Hemofilia.CAMPO_34);
    // fd.append('CAMPO_35',Hemofilia.CAMPO_35);
    // fd.append('CAMPO_36',Hemofilia.CAMPO_36);
    // fd.append('CAMPO_37',Hemofilia.CAMPO_37);
    // fd.append('CAMPO_38',Hemofilia.CAMPO_38);
    // fd.append('CAMPO_39',Hemofilia.CAMPO_39);
    // fd.append('CAMPO_40',Hemofilia.CAMPO_40);
    // fd.append('CAMPO_40_1',Hemofilia.CAMPO_40_1);
    // fd.append('CAMPO_40_2',Hemofilia.CAMPO_40_2);
    // fd.append('CAMPO_41',Hemofilia.CAMPO_41);
    // fd.append('CAMPO_42',Hemofilia.CAMPO_42);
    // fd.append('CAMPO_43',Hemofilia.CAMPO_43);
    // fd.append('CAMPO_44',Hemofilia.CAMPO_44);
    // fd.append('CAMPO_45',Hemofilia.CAMPO_45);
    // fd.append('CAMPO_46',Hemofilia.CAMPO_46);
    // fd.append('CAMPO_47_1',Hemofilia.CAMPO_47_1);
    // fd.append('CAMPO_47_2',Hemofilia.CAMPO_47_2);
    // fd.append('CAMPO_47_3',Hemofilia.CAMPO_47_3);
    // fd.append('CAMPO_48',Hemofilia.CAMPO_48);
    // fd.append('CAMPO_48_1',Hemofilia.CAMPO_48_1);
    // fd.append('CAMPO_48_2',Hemofilia.CAMPO_48_2);
    // fd.append('CAMPO_48_3',Hemofilia.CAMPO_48_3);
    // fd.append('CAMPO_48_4',Hemofilia.CAMPO_48_4);
    // fd.append('CAMPO_49',Hemofilia.CAMPO_49);
    // fd.append('CAMPO_49_1',Hemofilia.CAMPO_49_1);
    // fd.append('CAMPO_50',Hemofilia.CAMPO_50);
    // fd.append('CAMPO_51',Hemofilia.CAMPO_51);
    // fd.append('CAMPO_52',Hemofilia.CAMPO_52);
    // fd.append('CAMPO_53',Hemofilia.CAMPO_53);
    // fd.append('CAMPO_54',Hemofilia.CAMPO_54);
    // fd.append('CAMPO_55',Hemofilia.CAMPO_55);
    // fd.append('CAMPO_55_1',Hemofilia.CAMPO_55_1);
    // fd.append('CAMPO_56',Hemofilia.CAMPO_56);
    // fd.append('CAMPO_56_1',Hemofilia.CAMPO_56_1);
    // fd.append('CAMPO_57',Hemofilia.CAMPO_57);
    // fd.append('CAMPO_57_1',Hemofilia.CAMPO_57_1);
    // fd.append('CAMPO_57_2',Hemofilia.CAMPO_57_2);
    // fd.append('CAMPO_57_3',Hemofilia.CAMPO_57_3);
    // fd.append('CAMPO_57_4',Hemofilia.CAMPO_57_4);
    // fd.append('CAMPO_57_5',Hemofilia.CAMPO_57_5);
    // fd.append('CAMPO_57_6',Hemofilia.CAMPO_57_6);
    // fd.append('CAMPO_57_7',Hemofilia.CAMPO_57_7);
    // fd.append('CAMPO_57_8',Hemofilia.CAMPO_57_8);
    // fd.append('CAMPO_57_9',Hemofilia.CAMPO_57_9);
    // fd.append('CAMPO_57_10',Hemofilia.CAMPO_57_10);
    // fd.append('CAMPO_57_11',Hemofilia.CAMPO_57_11);
    // fd.append('CAMPO_57_12',Hemofilia.CAMPO_57_12);
    // fd.append('CAMPO_57_13',Hemofilia.CAMPO_57_13);
    // fd.append('CAMPO_57_14',Hemofilia.CAMPO_57_14);
    // fd.append('CAMPO_58',Hemofilia.CAMPO_58);
    // fd.append('CAMPO_59',Hemofilia.CAMPO_59);
    // fd.append('CAMPO_60',Hemofilia.CAMPO_60);
    // fd.append('CAMPO_61',Hemofilia.CAMPO_61);
    // fd.append('CAMPO_62',Hemofilia.CAMPO_62);
    // fd.append('CAMPO_63',Hemofilia.CAMPO_63);
    // fd.append('CAMPO_64',Hemofilia.CAMPO_64);
    // fd.append('CAMPO_64_1',Hemofilia.CAMPO_64_1);
    // fd.append('CAMPO_64_2',Hemofilia.CAMPO_64_2);
    // fd.append('CAMPO_65',Hemofilia.CAMPO_65);
    // fd.append('CAMPO_66',Hemofilia.CAMPO_66);
    // fd.append('hemofilia',hemofilia);
    // fd.append('nombre_archivo',NombreArchivo),
    // fd.append('longitud_archivo',Longitud)
      return this.http.post(`${this.API_URI2}/guardarHMFile`, formData);
  }




}
