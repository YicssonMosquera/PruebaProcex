import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router'
import {NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { CACArtritisService } from '../../services/CAC-Artritis/cac-artritis.service'
import { HemofiliaService } from 'src/app/services/hemofilia/hemofilia.service';
import Swal from 'sweetalert2';
import { ARTRITIS } from 'src/app/models/artritis';
import { OpcionesListaService } from 'src/app/services/opcionesLista/opciones-lista.service';

@Component({
  selector: 'app-cuenta-artritis-listar',
  templateUrl: './cuenta-artritis-listar.component.html',
  styleUrls: ['./cuenta-artritis-listar.component.css']
})
export class CuentaArtritisListarComponent implements OnInit {

  rows = 10;
  page = 0;
  artritis
  resultado
  NoIdentificacion = ''
  primerNombre = ''
  primerApellido = ''
  TipoIdentificaion = '';
  identificacion
  totalRecords
  opcion: any;

  _ARTRITIS_4 = true;
  _ARTRITIS_6 = true;
  _ARTRITIS_8 = true;
  _ARTRITIS_9 = true;
  _ARTRITIS_10 = true;
  _ARTRITIS_11 = true;



  NumIdentificacion = true;
  afiliado = [];
  cuentaCAC = [];
  existeFecha = true;
  existeAfliado = false;
  desplegar = true;
  ARTRITIS_16 = true;
  ARTRITIS_13 = true;
  ARTRITIS_15 = true;
  ARTRITIS_14 = true;
  ARTRITIS_90 = true;
  opcionesListasARTRITISService: any;
  hemofiliaService: any;
  

  tipodocumento: any
  Sexo: any
  RegimenAF: any
  CEtnica: any
  C2_CAMPO_3

  ARTRITIS5: any;
  ARTRITIS8: any;
  Ocupacion: any;
  ARTRITIS10: any;
  ARTRITIS12: any;
  ARTRITIS13: any;
  ARTRITIS11: any;
  municipioresidencia: any;
  yaGuardo = true;
  Guardo = true;
  existe
  CAC_ARTRITIS = 'no existe';
  nacimiento
  CC
  ARTRITIS: ARTRITIS = {
    ID_CUENTA_ARTRITIs: '',
    CAMPO_1: '',
    CAMPO_2: '',
    CAMPO_3: '',
    CAMPO_4: '',
    CAMPO_5: '',
    CAMPO_6: '',
    CAMPO_7: '',
    CAMPO_8: '',
    CAMPO_9: '',
    CAMPO_10: '',
    CAMPO_11: '',
    CAMPO_12: '',
    CAMPO_13: '',
    CAMPO_14: '',
    CAMPO_15: '',
    CAMPO_16: '',
    CAMPO_17: '',
    CAMPO_18: '',
    CAMPO_19: '',
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_28: '',
    CAMPO_29: '',
    CAMPO_30: '',
    CAMPO_31: '',
    CAMPO_32: '',
    CAMPO_33: '',
    CAMPO_34: '',
    CAMPO_35: '',
    CAMPO_36: '',
    CAMPO_37: '',
    CAMPO_38: '',
    CAMPO_39: '',
    CAMPO_40: '',
    CAMPO_41: '',
    CAMPO_42: '',
    CAMPO_43: '',
    CAMPO_44: '',
    CAMPO_45_1: '',
    CAMPO_45_2: '',
    CAMPO_45_3: '',
    CAMPO_45_4: '',
    CAMPO_45_5: '',
    CAMPO_45_6: '',
    CAMPO_45_7: '',
    CAMPO_45_8: '',
    CAMPO_46_1: '',
    CAMPO_46_2: '',
    CAMPO_46_3: '',
    CAMPO_46_4: '',
    CAMPO_46_5: '',
    CAMPO_46_6: '',
    CAMPO_46_7: '',
    CAMPO_46_8: '',
    CAMPO_46_9: '',
    CAMPO_46_10: '',
    CAMPO_47_1: '',
    CAMPO_47_2: '',
    CAMPO_47_3: '',
    CAMPO_47_4: '',
    CAMPO_47_5: '',
    CAMPO_47_6: '',
    CAMPO_47_7: '',
    CAMPO_47_8: '',
    CAMPO_47_9: '',
    CAMPO_47_10: '',
    CAMPO_47_11: '',
    CAMPO_47_12: '',
    CAMPO_47_13: '',
    CAMPO_47_14: '',
    CAMPO_48: '',
    CAMPO_49: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_56: '',
    CAMPO_57: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_63: '',
    CAMPO_64: '',
    CAMPO_65: '',
    CAMPO_66: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_70: '',
    CAMPO_71_1: '',
    CAMPO_71_2: '',
    CAMPO_71_3: '',
    CAMPO_71_4: '',
    CAMPO_71_5: '',
    CAMPO_71_6: '',
    CAMPO_71_7: '',
    CAMPO_72: '',
    CAMPO_73_1: '',
    CAMPO_73_2: '',
    CAMPO_73_3: '',
    CAMPO_73_4: '',
    CAMPO_73_5: '',
    CAMPO_73_6: '',
    CAMPO_73_7: '',
    CAMPO_73_8: '',
    CAMPO_73_9: '',
    CAMPO_73_10: '',
    CAMPO_74_1: '',
    CAMPO_74_2: '',
    CAMPO_74_3: '',
    CAMPO_74_4: '',
    CAMPO_74_5: '',
    CAMPO_74_6: '',
    CAMPO_74_7: '',
    CAMPO_74_8: '',
    CAMPO_74_9: '',
    CAMPO_74_10: '',
    CAMPO_74_11: '',
    CAMPO_74_12: '',
    CAMPO_74_13: '',
    CAMPO_74_14: '',
    CAMPO_75_1: '',
    CAMPO_75_2: '',
    CAMPO_75_3: '',
    CAMPO_75_4: '',
    CAMPO_75_5: '',
    CAMPO_75_6: '',
    CAMPO_75_7: '',
    CAMPO_76: '',
    CAMPO_77: '',
    CAMPO_78: '',
    CAMPO_79: '',
    CAMPO_80: '',
    CAMPO_81: '',
    CAMPO_82: '',
    CAMPO_83: '',
    CAMPO_84: '',
    CAMPO_85: '',
    CAMPO_86: '',
    CAMPO_87: '',
    CAMPO_88: '',
    CAMPO_89: '',
    CAMPO_90: '',
    CAMPO_91: ''
  }



  constructor(private artritisservice: CACArtritisService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService, private modalService: NgbModal, public tabs: AppComponent, private hemofiliaservice: HemofiliaService,private opcionesListaService: OpcionesListaService,config: NgbModalConfig,) {config.backdrop = 'static';
  config.keyboard = false; }

  ngOnInit(): void {
    this.consultarDatos();
    this.Cargartipodocumento();
    this.CargarSexo();
    this.CargarRegimenafiliacion();
    this.CargarcodigoPertenenciaetnica();
    this.cargarGrupoPoblacional3();
    this.CargarMunicipioresidencia();

  }

  consultarDatos() {
    this.artritisservice.consultarDatos(this.page, this.rows, this.NoIdentificacion, this.primerNombre, this.primerApellido, this.TipoIdentificaion).subscribe(res => {
      this.resultado = res;
      this.artritis = this.resultado.artritis;
      this.totalRecords = this.resultado.numero_registro;
    })
  }

  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.consultarDatos();
  }
  limpiarFiltros() {
    this.NoIdentificacion = '';
    this.primerNombre = '';
    this.primerApellido = '';
    this.TipoIdentificaion = '';
    this.consultarDatos();
  }
  onRowSelect(event) {
    const CC = event.data.CAMPO_9;
    this.ngxSpinnerService.start();
    this.artritisservice.getOne(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Artitis-frm ', 'Artritis-edit/' + CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Artitis-frm', 'Artritis-frm');
      }

    })
  }
  Cargartipodocumento() {
    this.hemofiliaservice.CargarTipodocumento().subscribe(res => {
      this.identificacion = res;
    })
  }


  open(content: any) {
    this.modalService.open(content, { size: 'sm', centered: true });
  }
  nombrearchiv(content2: any) {
    this.modalService.open(content2, { size: 'sm', centered: true });
  }

  vigent(content3: any) {
    this.modalService.open(content3, { size: 'sm', centered: true });
  }

  soportes(content4: any) {
    this.modalService.open(content4, { size: 'sm', centered: true });
  }

  formularioNuevo() {
    this.tabs.crearTab('Artitis-frm', 'Artritis-frm');
  }

  aprobar_4(dato) {
    if (dato != '') {
      this._ARTRITIS_4 = true;
    }
  }
  aprobar_6(dato) {
    if (dato != '') {
      this._ARTRITIS_6 = true;
    }
  }
  aprobar_8(dato) {
    if (dato != '') {
      this._ARTRITIS_8 = true;
      this.NumIdentificacion = false;
    }
  }
  aprobar_9(dato) {
    if (dato != '') {
      this._ARTRITIS_9 = true;
      this.CC = dato;
    }
  }
  aprobar_10(dato) {
    if (dato != '') {
      this._ARTRITIS_10 = true;
    }
  }
  aprobar_11(dato) {
    if (dato != '') {
      this._ARTRITIS_11 = true;
    }
  }

  
  guardarDatos() {
    this.artritisservice.getOne(this.ARTRITIS.CAMPO_9).subscribe(res => {
      this.existe = res;

      if (this.existe == '') {
        let entro = false;
        if (this.ARTRITIS.CAMPO_4 == '') {
          this._ARTRITIS_4 = false;
          entro = true;
        } else {
          this._ARTRITIS_4 = true;
        }

        if (this.ARTRITIS.CAMPO_6 == '') {
          this._ARTRITIS_6 = false;
          entro = true;
        } else {
          this._ARTRITIS_6 = true;
        }
        if (this.ARTRITIS.CAMPO_8 == '') {
          this._ARTRITIS_8 = false;
          entro = true;
        } else {
          this._ARTRITIS_8 = true;
        }

        if (this.ARTRITIS.CAMPO_9 == '') {
          this._ARTRITIS_9 = false;
          entro = true;
        } else {
          this._ARTRITIS_9 = true;
        }
        if (this.ARTRITIS.CAMPO_10 == '') {
          this._ARTRITIS_10 = false;
          entro = true;
        } else {
          this._ARTRITIS_10 = true;
        }
        if (this.ARTRITIS.CAMPO_11 == '') {
          this._ARTRITIS_11 = false;
          entro = true;
        } else {
          this._ARTRITIS_11 = true;
        }

        if (entro == true) {
          Swal.fire({
            icon: 'error',
            title: '¡Advertencia!',
            text: 'Digite los campos obligatorios',
          })
        } else {
          this.yaGuardo = false;
          this.Guardo = true;
          // let ARTRITIS_9 = this.ARTRITIS.CAMPO_9?.split('.')[0];
          // this.ARTRITIS.CAMPO_9 = ARTRITIS_9;

          // let ARTRITIS_14 = this.ARTRITIS.CAMPO_14?.split('.')[0];
          // this.ARTRITIS.CAMPO_14 = ARTRITIS_14;

          delete this.ARTRITIS.ID_CUENTA_ARTRITIs;
          this.artritisservice.GuardarArtritis(this.ARTRITIS).subscribe(res => {
            Swal.fire({
              title: 'Almacenado!',
              text: "¿Desea continuar con el diligenciamiento del formulario?",
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, quiero continuar',
              cancelButtonText: 'No, gracias'
            }).then((result) => {
              if (result.isConfirmed) {
                this.tabs.crearTab('Artritis-edit', 'Artritis-frm/' + this.CC);
                this.limpiarFormulario();
              }
            })
          })
        }
      }
    })
  }

  limpiarFormulario() {
    this.ARTRITIS = {
      CAMPO_1: '',
      CAMPO_2: '',
      CAMPO_3: '',
      CAMPO_4: '',
      CAMPO_5: '',
      CAMPO_6: '',
      CAMPO_7: '',
      CAMPO_8: '',
      CAMPO_9: '',
      CAMPO_10: '',
      CAMPO_11: '',
      CAMPO_12: '',
      CAMPO_13: '',
      CAMPO_14: '',
      CAMPO_15: '',
      CAMPO_16: '',
      CAMPO_90: '',
    }
    this.desplegar = true;
    this.NumIdentificacion = true;
    this.existeAfliado = false;
    this.Guardo = true;
    this.modalService.dismissAll();
  }

  buscarCAC_ARTRITIS() {
    this.artritisservice.CargarCAC(this.ARTRITIS.CAMPO_9, this.ARTRITIS.CAMPO_8).subscribe(res => {
      this.cuentaCAC.push(res)
      if (this.cuentaCAC.length > 0) {
        this.limpiarFormulario();
        Swal.fire({
          title: 'Ya existe un usuario con este documento',
          text: "¿Desea ir a editar dicho usuario?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, quiero ir',
          cancelButtonText: 'No, gracias'
        }).then((result) => {
          if (result.isConfirmed) {
            this.tabs.crearTab('Artritis-edit', 'Artritis-frm/' + this.CC);
            this.limpiarFormulario();
          } else {
            this.limpiarFormulario();
          }
        })

      }
    })
  }

  editar() {
    this.tabs.crearTab('Artritis-edit', 'Artritis-frm/' + this.CC);
    this.limpiarFormulario();
  }

  
  buscarAfiliado() {
    this.afiliado = [];
    this.artritisservice.CargarAfiliado(this.ARTRITIS.CAMPO_9, this.ARTRITIS.CAMPO_8).subscribe(res => {
      this.afiliado.push(res)
      if (this.afiliado.length != 0) {
        this.ARTRITIS.CAMPO_4 = this.afiliado[0].PRIMER_NOMBRE;
        this.ARTRITIS.CAMPO_5 = this.afiliado[0].PRIMER_APELLIDO;
        this.ARTRITIS.CAMPO_10 = this.afiliado[0].FECHA_NACIMIENTO
        this.ARTRITIS.CAMPO_11 = this.afiliado[0].SEXO;
        this.ARTRITIS.CAMPO_2 = this.afiliado[0].TIPO_REGIMEN;
        this.ARTRITIS.CAMPO_16 = this.afiliado[0].FECHA_AFILIACION;
        this.existeAfliado = true;
        this.NumIdentificacion = true;
        this.desplegar = false;
        this.Guardo = false;
        if (this.afiliado[0].OTROS_NOMBRES != null) {
          this.ARTRITIS.CAMPO_5 = this.afiliado[0].OTROS_NOMBRES;
        }
        if (this.afiliado[0].OTROS_APELLIDOS != null) {
          this.ARTRITIS.CAMPO_7 = this.afiliado[0].OTROS_APELLIDOS;
        }
        // if (this.afiliado[0].OCUPACION != null) {
        //   this.ARTRITIS.CAMPO_9 = this.afiliado[0].OCUPACION;
        // }
        if (this.afiliado[0].PERTENENCIA_ETNICA != null) {
          this.ARTRITIS.CAMPO_12 = this.afiliado[0].PERTENENCIA_ETNICA;
        }
        if (this.afiliado[0].DIRECCION_RESIDENCIA != '' && this.afiliado[0].DIRECCION_RESIDENCIA != 'NO ENCONTRADO') {
          this.ARTRITIS.CAMPO_13 = this.afiliado[0].DIRECCION_RESIDENCIA ;
          this.ARTRITIS_13 = true;
        }
        if (this.afiliado[0].CODIGO_DEPARTAMENTO != '' && this.afiliado[0].CODIGO_MUNICIPIO != '') {
          this.ARTRITIS.CAMPO_15 = this.afiliado[0].CODIGO_DEPARTAMENTO + this.afiliado[0].CODIGO_MUNICIPIO;
          this.ARTRITIS_15 = true;
        }
        if (this.afiliado[0].TELEFONO != '') {
          this.ARTRITIS.CAMPO_14 = this.afiliado[0].TELEFONO;
          this.ARTRITIS_14 = true;
        }
        if (this.afiliado[0].CODIGO_BDUA != '') {
          this.ARTRITIS.CAMPO_90 = this.afiliado[0].CODIGO_BDUA;
          this.ARTRITIS_90 = true;
        }

      }
    })

  }

  validacionNuevo() {
    if (this.ARTRITIS.CAMPO_8 != '' && this.ARTRITIS.CAMPO_9 != '') {
      this.buscarCAC_ARTRITIS();
      console.log('cac ARTRITIS')
      console.log(this.cuentaCAC)
      console.log('if de afiliado')
      this.buscarAfiliado();
      console.log(this.afiliado)

      if (this.afiliado.length == 0) {
        console.log('if de desplegar')
        this.Guardo = false;
        this.desplegar = false;
      }
    }
  }

  cargarNacimiento(_nacimiento) {
    this.nacimiento = new Date(_nacimiento);
    if (this.ARTRITIS.CAMPO_10 != '') {
      this.existeFecha = false;
      this.ARTRITIS_16 = false;
    } else {
      this.ARTRITIS_16 = true;
      this.existeFecha = true;
    }
  }
  CAMPO_10(ARTRITIS) {
    var startDate = new Date(ARTRITIS);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de nacimiento debe ser menor a la fecha actual',
      })
      this.ARTRITIS.CAMPO_10 = '';
    }
  }

  CAMPO_16(ARTRITIS) {
    var startDate = new Date(ARTRITIS);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de afiliación a la EAPB que reporta debe ser menor a la fecha actual',
      })
      this.ARTRITIS.CAMPO_16 = '';
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.ARTRITIS.CAMPO_16 = '';
    }
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

  cargarGrupoPoblacional3() {
    this.opcionesListaService.cargarGrupoPoblacional3().subscribe(res => {
      this.C2_CAMPO_3 = res;
    })
  }

  CargarMunicipioresidencia() {
    this.hemofiliaService.CargarMunicipioresidencia().subscribe(res => {
      this.municipioresidencia = res;
    })
  }


  formulario(content5: any) {
    this.modalService.open(content5, { size: 'xl', scrollable: true });
  }


}
