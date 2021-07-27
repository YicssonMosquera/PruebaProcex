import { Component, OnInit } from '@angular/core';
import { HemofiliaService } from 'src/app/services/hemofilia/hemofilia.service';

@Component({
  selector: 'app-cuenta-cancer',
  templateUrl: './cuenta-cancer.component.html',
  styleUrls: ['./cuenta-cancer.component.css']
})
export class CuentaCancerComponent implements OnInit {
  horas: any
  minutos: any
  tipodocumento: any
  Sexo: any
  RegimenAF: any
  CEtnica: any
  GProblacional: any
  EstagFechacorte: any
  Programaconsejeria: any
  MPDiagnostico: any
  TPDiagnostico: any
  CLSeveridad: any
  ASHemofilia: any
  FactorR: any
  Esquema1: any
  FactorrecibidoTA: any
  EsquemaTA: any
  Frecuenciasemana: any;
  Modalidadtratamiento: any
  Viaadministracion: any;
  ProfesionalSP: any;
  Hermatosis: any
  PacienteITI: any;
  RecibioITI: any;
  Ingiborfechacorte: any;
  hermofiliacronica: any;
  VHC: any;
  VHB: any;
  VIH: any;
  Pseudotumor: any;
  Fractura: any;
  Anasifilis: any;
  Novedad: any;
  Causademuerte: any;
  municipioresidencia: any;
  codigohabilitacionIps: any;
  codigocups: any;
  Ocupacion: any;
  hemofilia1:any
  isReadonly = true;
  constructor(private hemofiliaservice: HemofiliaService) { }

  ngOnInit(): void {
    this.Funcionesdecarga();
  }

  Funcionesdecarga() {
    this.Cargartipodocumento();
    this.CargarSexo();
    this.CargarRegimenafiliacion();
    this.CargarcodigoPertenenciaetnica();
    this.Cargargrupopoblacional();
    this.CargarEstadogestionfechacorte();
    this.CargarUsarioProgramaconsegeria();
    this.Cargarmotivopruebadiagnostico();
    this.CarTipofrecuenciaDiagnostico();
    this.CargarClasificacionSeveridadNF();
    this.CargarAFAsociadohemofilia();
    this.CargarFactorrecibido();
    this.CargarEsquema();
    this.CargarFacorRecibidoTA();
    this.CargarEsquemaTA();
    this.CargarFrecuenciaSemana();
    this.CargarModalidadapltratamiento();
    this.CargarviaAdministración();
    this.CargarProfesionallieratenciondelpaciente();
    this.Cargarhermatosis();
    this.CargarPresenciainhibidorfechacorte();
    this.recibioiti();
    this.CargarPacienteITI();
    this.CargarArtropiahermofilicacronica();
    this.CargarInfectadoporVHC();
    this.CargarInfectadoporVHB();
    this.CargarInfectadoporVIH();
    this.CargarPseudotumores();
    this.CargarFracturas();
    this.CargarAnafilaxis();
    this.CargarNovedad();
    this.Cargarcausademuerte();
    this.CargarMunicipioresidencia();
    this.Codigovalidohabilitacionips();
    this.CodigoCUM35363738();
    this.CargarOcupacion();

  }
  Cargartipodocumento() {
    this.hemofiliaservice.CargarTipodocumento().subscribe(res => {
      this.tipodocumento = res;
    })
  }

  CargarSexo() {
    this.hemofiliaservice.CargarSexo().subscribe(res => {
      this.Sexo = res;
    })
  }

  CargarRegimenafiliacion() {
    this.hemofiliaservice.CargarRegimenAfiliacion().subscribe(res => {
      this.RegimenAF = res;
    })
  }

  CargarcodigoPertenenciaetnica() {
    this.hemofiliaservice.CargarcodigoPertenenciaetnica().subscribe(res => {
      this.CEtnica = res;
    })
  }
  Cargargrupopoblacional() {
    this.hemofiliaservice.Cargargrupopoblacional().subscribe(res => {
      this.GProblacional = res;
    })
  }

  CargarEstadogestionfechacorte() {
    this.hemofiliaservice.CargarEstadogestionfechacorte().subscribe(res => {
      this.EstagFechacorte = res;
    })
  }

  CargarUsarioProgramaconsegeria() {
    this.hemofiliaservice.CargarUsarioProgramaconsegeria().subscribe(res => {
      this.Programaconsejeria = res;
    })
  }
  Cargarmotivopruebadiagnostico() {
    this.hemofiliaservice.Cargarmotivopruebadiagnostico().subscribe(res => {
      this.MPDiagnostico = res;
    })
  }
  CarTipofrecuenciaDiagnostico() {
    this.hemofiliaservice.CarTipofrecuenciaDiagnostico().subscribe(res => {
      this.TPDiagnostico = res;
    })
  }

  CargarClasificacionSeveridadNF() {
    this.hemofiliaservice.CargarClasificacionSeveridadNF().subscribe(res => {
      this.CLSeveridad = res;
    })
  }

  CargarAFAsociadohemofilia() {
    this.hemofiliaservice.CargarAFAsociadohemofilia().subscribe(res => {
      this.ASHemofilia = res;
    })
  }

  CargarFactorrecibido() {
    this.hemofiliaservice.CargarFactorrecibido().subscribe(res => {
      this.FactorR = res;
    })
  }

  CargarEsquema() {
    this.hemofiliaservice.CargarEsquema().subscribe(res => {
      this.Esquema1 = res;
    })
  }
  CargarFacorRecibidoTA() {
    this.hemofiliaservice.CargarFacorRecibidoTA().subscribe(res => {
      this.FactorrecibidoTA = res;
    })
  }
  CargarEsquemaTA() {
    this.hemofiliaservice.CargarEsquemaTA().subscribe(res => {
      this.EsquemaTA = res;
    })
  }
  CargarFrecuenciaSemana() {
    this.hemofiliaservice.CargarFrecuenciaSemana().subscribe(res => {
      this.Frecuenciasemana = res;
    })
  }
  CargarModalidadapltratamiento() {
    this.hemofiliaservice.CargarModalidadapltratamiento().subscribe(res => {
      this.Modalidadtratamiento = res;
    })
  }
  CargarviaAdministración() {
    this.hemofiliaservice.CargarviaAdministración().subscribe(res => {
      this.Viaadministracion = res;
    })
  }
  CargarProfesionallieratenciondelpaciente() {
    this.hemofiliaservice.CargarProfesionallieratenciondelpaciente().subscribe(res => {
      this.ProfesionalSP = res;
    })
  }
  Cargarhermatosis() {
    this.hemofiliaservice.Cargarhermatosis().subscribe(res => {
      this.Hermatosis = res;
    })
  }
  CargarPresenciainhibidorfechacorte() {
    this.hemofiliaservice.CargarPresenciainhibidorfechacorte().subscribe(res => {
      this.Ingiborfechacorte = res;
    })
  }
  CargarPacienteITI() {
    this.hemofiliaservice.CargarPacienteITI().subscribe(res => {
      this.PacienteITI = res;
    })
  }
  recibioiti() {
    this.hemofiliaservice.recibioiti().subscribe(res => {
      this.RecibioITI = res;
    })
  }
  CargarArtropiahermofilicacronica() {
    this.hemofiliaservice.CargarArtropiahermofilicacronica().subscribe(res => {
      this.hermofiliacronica = res;
    })
  }
  CargarInfectadoporVHC() {
    this.hemofiliaservice.CargarInfectadoporVHC().subscribe(res => {
      this.VHC = res;
    })
  }
  CargarInfectadoporVHB() {
    this.hemofiliaservice.CargarInfectadoporVHB().subscribe(res => {
      this.VHB = res
    })
  }
  CargarInfectadoporVIH() {
    this.hemofiliaservice.CargarInfectadoporVIH().subscribe(res => {
      this.VIH = res;
    })

  }
  CargarPseudotumores() {
    this.hemofiliaservice.CargarPseudotumores().subscribe(res => {
      this.Pseudotumor = res;
    })
  }
  CargarFracturas() {
    this.hemofiliaservice.CargarFracturas().subscribe(res => {
      this.Fractura = res;
    })
  }
  CargarAnafilaxis() {
    this.hemofiliaservice.CargarAnafilaxis().subscribe(res => {
      this.Anasifilis = res;
    })
  }
  CargarNovedad() {
    this.hemofiliaservice.CargarNovedad().subscribe(res => {
      this.Novedad = res;
    })
  }
  Cargarcausademuerte() {
    this.hemofiliaservice.Cargarcausademuerte().subscribe(res => {
      this.Causademuerte = res;
    })
  }
  CargarMunicipioresidencia() {
    this.hemofiliaservice.CargarMunicipioresidencia().subscribe(res => {
      this.municipioresidencia = res;
    })
  }
  Codigovalidohabilitacionips() {
    this.hemofiliaservice.Codigovalidohabilitacionips().subscribe(res => {
      this.codigohabilitacionIps = res;
    })
  }
  CodigoCUM35363738() {
    this.hemofiliaservice.CodigoCUM35363738().subscribe(res => {
      this.codigocups = res;
    })
  }

  CargarOcupacion() {
    this.hemofiliaservice.CargarOcupacion().subscribe(res => {
      this.Ocupacion = res;
    })
  }



}
