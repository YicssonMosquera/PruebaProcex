import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'
import { Hemofilia } from '../../models/hemofilia'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hemofilia-formulario',
  templateUrl: './hemofilia-formulario.component.html',
  styleUrls: ['./hemofilia-formulario.component.css']
})
export class HemofiliaFormularioComponent implements OnInit {

  fechanacimiento: NgbDateStruct
  fechaafiliacioneps: NgbDateStruct
  fechacorte: NgbDateStruct
  fechadiagnostico: NgbDateStruct
  FIPtratamiento: NgbDateStruct
  fechadt: NgbDateStruct
  fechamuerte: NgbDateStruct
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

  hemofilia: Hemofilia = {
    CAMPO_1:'',
    CAMPO_2:'',
    CAMPO_3:'',
    CAMPO_4:'',
    CAMPO_5:'',
    CAMPO_6:'',
    CAMPO_7:'',
    CAMPO_8:'',
    CAMPO_9:'',
    CAMPO_10:'',
    CAMPO_11:'',
    CAMPO_12:'',
    CAMPO_13:'',
    CAMPO_14:'',
    CAMPO_15:'',
    CAMPO_16:'',
    CAMPO_17:'',
    CAMPO_18:'',
    CAMPO_19:'',
    CAMPO_20:'',
    CAMPO_21:'',
    CAMPO_22:'',
    CAMPO_23:'',
    CAMPO_24:'',
    CAMPO_25:'',
    CAMPO_26:'',
    CAMPO_27:'',
    CAMPO_28:'',
    CAMPO_29:'',
    CAMPO_30:'',
    CAMPO_31:'',
    CAMPO_32:'',
    CAMPO_32_1:'',
    CAMPO_32_2:'',
    CAMPO_32_3:'',
    CAMPO_32_4:'',
    CAMPO_33:'',
    CAMPO_34:'',
    CAMPO_35:'',
    CAMPO_36:'',
    CAMPO_37:'',
    CAMPO_38:'',
    CAMPO_39:'',
    CAMPO_40:'',
    CAMPO_40_1:'',
    CAMPO_40_2:'',
    CAMPO_41:'',
    CAMPO_42:'',
    CAMPO_43:'',
    CAMPO_44:'',
    CAMPO_45:'',
    CAMPO_46:'',
    CAMPO_47_1:'',
    CAMPO_47_2:'',
    CAMPO_47_3:'',
    CAMPO_48:'',
    CAMPO_48_1:'',
    CAMPO_48_2:'',
    CAMPO_48_3:'',
    CAMPO_48_4:'',
    CAMPO_49:'',
    CAMPO_49_1:'',
    CAMPO_50:'',
    CAMPO_51:'',
    CAMPO_52:'',
    CAMPO_53:'',
    CAMPO_54:'',
    CAMPO_55:'',
    CAMPO_55_1:'',
    CAMPO_56:'',
    CAMPO_56_1:'',
    CAMPO_57:'',
    CAMPO_57_1:'',
    CAMPO_57_2:'',
    CAMPO_57_3:'',
    CAMPO_57_4:'',
    CAMPO_57_5:'',
    CAMPO_57_6:'',
    CAMPO_57_7:'',
    CAMPO_57_8:'',
    CAMPO_57_9:'',
    CAMPO_57_10:'',
    CAMPO_57_11:'',
    CAMPO_57_12:'',
    CAMPO_57_13:'',
    CAMPO_57_14:'',
    CAMPO_58:'',
    CAMPO_59:'',
    CAMPO_60:'',
    CAMPO_61:'',
    CAMPO_62:'',
    CAMPO_63:'',
    CAMPO_64:'',
    CAMPO_64_1:'',
    CAMPO_64_2:'',
    CAMPO_65:'',
    CAMPO_66:'',
    EDAD_CORTE:'',
    EDAD_ACTUAL:'',
    DOSIS_PROFILAXIS:'',
  }
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


  GuargarDatos() {
    if (this.fechanacimiento === undefined) {
      this.hemofilia.CAMPO_7 = '';
    } else {
      this.hemofilia.CAMPO_7 = this.fechanacimiento.year + "-" + this.fechanacimiento.month + "-" + this.fechanacimiento.day;
    }
    if (this.fechaafiliacioneps === undefined) {
      this.hemofilia.CAMPO_16 = '';
    } else {
      this.hemofilia.CAMPO_16 = this.fechaafiliacioneps.year + "-" + this.fechaafiliacioneps.month + "-" + this.fechaafiliacioneps.day;
    }
    if (this.fechacorte === undefined) {
      this.hemofilia.CAMPO_66 = '';
    } else {
      this.hemofilia.CAMPO_66 = this.fechacorte.year + "-" + this.fechacorte.month + "-" + this.fechacorte.day;
    }

    if (this.fechadiagnostico === undefined) {
      this.hemofilia.CAMPO_21 = '';
    } else {
      this.hemofilia.CAMPO_21 = this.fechadiagnostico.year + "-" + this.fechadiagnostico.month + "-" + this.fechadiagnostico.day;
    }
    if (this.FIPtratamiento === undefined) {
      this.hemofilia.CAMPO_29 = '';
    } else {
      this.hemofilia.CAMPO_29 = this.FIPtratamiento.year + "-" + this.FIPtratamiento.month + "-" + this.FIPtratamiento.day;
    }
    if (this.fechadt === undefined) {
      this.hemofilia.CAMPO_48_1 = '';
    } else {
      this.hemofilia.CAMPO_48_1 = this.fechadt.year + "-" + this.fechadt.month + "-" + this.fechadt.day
    }

    if (this.fechamuerte === undefined) {
      this.hemofilia.CAMPO_64_2 = '';
    } else {
      this.hemofilia.CAMPO_64_2 = this.fechamuerte.year + "-" + this.fechamuerte.month + "-" + this.fechamuerte.day;
    }

    for (let i = 0; i < this.Ocupacion.length; i++) {
      if (this.Ocupacion[i].CODIGO_Ocupacion + "." + this.Ocupacion[i].DESCRIPCION == this.hemofilia.CAMPO_9) {
        this.hemofilia.CAMPO_9 = this.Ocupacion[i].CODIGO_Ocupacion;
      }
    }

    for (let i = 0; i < this.municipioresidencia.length; i++) {
      if (this.municipioresidencia[i].CODIGO_CIUDAD + "." + this.municipioresidencia[i].NOMBRE_CIUDAD == this.hemofilia.CAMPO_14) {
        this.hemofilia.CAMPO_14 = this.municipioresidencia[i].CODIGO_CIUDAD;
      }
    }


    for (let i = 0; i < this.codigohabilitacionIps.length; i++) {
      if (this.codigohabilitacionIps[i].CODIGO_IPS + "." + this.codigohabilitacionIps[i].NOMBRE_IPS == this.hemofilia.CAMPO_22) {
        this.hemofilia.CAMPO_22 = this.codigohabilitacionIps[i].CODIGO_IPS;
        console.log(this.hemofilia.CAMPO_22)
      }
    }
    for (let i = 0; i < this.codigohabilitacionIps.length; i++) {
      if (this.codigohabilitacionIps[i].CODIGO_IPS + "." + this.codigohabilitacionIps[i].NOMBRE_IPS == this.hemofilia.CAMPO_39) {
        this.hemofilia.CAMPO_39 = this.codigohabilitacionIps[i].CODIGO_IPS;
        console.log(this.hemofilia.CAMPO_39)
      }
    }

    for (let i = 0; i < this.codigocups.length; i++) {
      if (this.codigocups[i].CODIGO_CUP + "." + this.codigocups[i].DESCRIPCION == this.hemofilia.CAMPO_35) {
        this.hemofilia.CAMPO_35 = this.codigocups[i].CODIGO_CUP;
      }
      for (let i = 0; i < this.codigocups.length; i++) {
        if (this.codigocups[i].CODIGO_CUP + "." + this.codigocups[i].DESCRIPCION == this.hemofilia.CAMPO_35) {
          this.hemofilia.CAMPO_35 = this.codigocups[i].CODIGO_CUP;

          if (this.codigocups[i].CODIGO_CUP + "." + this.codigocups[i].DESCRIPCION == this.hemofilia.CAMPO_36) {
            this.hemofilia.CAMPO_36 = this.codigocups[i].CODIGO_CUP;
          }
        }
      }

       for (let i = 0; i < this.codigocups.length; i++) {
         if (this.codigocups[i].CODIGO_CUP + "." + this.codigocups[i].DESCRIPCION == this.hemofilia.CAMPO_37) {
        this.hemofilia.CAMPO_37 = this.codigocups[i].CODIGO_CUP;
         }
         if (this.codigocups[i].CODIGO_CUP + "." + this.codigocups[i].DESCRIPCION == this.hemofilia.CAMPO_38) {
           this.hemofilia.CAMPO_38 = this.codigocups[i].CODIGO_CUP;

      }
    }
  }



   this.hemofiliaservice.Guardarhemofilia(this.hemofilia).subscribe(res => {
     console.log(res)
     Swal.fire({
        title: 'Almacenado!',
        text: 'Datos almacenados con exito.',
        icon: 'success',
        allowOutsideClick: false
      }

      ).then((result) => {
        if (result.value) {

        }
      })
    })

  }
}
