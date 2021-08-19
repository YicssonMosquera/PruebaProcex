import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { CACCancerServiceService } from '../../services/CAC-cancer/cac-cancer-service.service';
import Swal from 'sweetalert2';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import { Cancer } from 'src/app/models/cancer';
import { OpcionesListasCancerService } from 'src/app/services/opcionesListas-cancer/opciones-listas-cancer.service';

@Component({
  selector: 'app-cancer-cargar',
  templateUrl: './cancer-cargar.component.html',
  styleUrls: ['./cancer-cargar.component.css']
})
export class CancerCargarComponent implements OnInit {

  




  _cancer_1 = true;
  _cancer_3 = true;
  _cancer_5 = true;
  _cancer_6 = true;
  _cancer_7 = true;
  _cancer_8 = true;

  // cancer_2 = false;
  // cancer_4 = false;
  // cancer_9 = false;
  // cancer_10 = false;
  // cancer_12 = false;
  // cancer_14 = false;
  // cancer_15 = false;
  // cancer_133 = false;
  NumIdentificacion = true;
  afiliado = [];
  cuentaCAC = [];
  existeFecha = true;
  existeAfliado = false;
  desplegar = true;
  cancer_16 = true;
 

  cancer5: any;
  cancer8: any;
  Ocupacion: any;
  cancer10: any;
  cancer12: any;
  cancer13: any;
  municipioresidencia: any;
  yaGuardo = true;
  Guardo = true;
  existe
  CAC_cancer = 'no existe';
  nacimiento
  CC
  cancer: Cancer = {
    ID_CUENTA_CANCER: '',
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
    CAMPO_45: '',
    CAMPO_46: '',
    CAMPO_46_1: '',
    CAMPO_46_2: '',
    CAMPO_46_3: '',
    CAMPO_46_4: '',
    CAMPO_46_5: '',
    CAMPO_46_6: '',
    CAMPO_46_7: '',
    CAMPO_46_8: '',
    CAMPO_47: '',
    CAMPO_48: '',
    CAMPO_49: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_53_1: '',
    CAMPO_53_2: '',
    CAMPO_53_3: '',
    CAMPO_53_4: '',
    CAMPO_53_5: '',
    CAMPO_53_6: '',
    CAMPO_53_7: '',
    CAMPO_53_8: '',
    CAMPO_53_9: '',
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
    CAMPO_66_1: '',
    CAMPO_66_2: '',
    CAMPO_66_3: '',
    CAMPO_66_4: '',
    CAMPO_66_5: '',
    CAMPO_66_6: '',
    CAMPO_66_7: '',
    CAMPO_66_8: '',
    CAMPO_66_9: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_70: '',
    CAMPO_71: '',
    CAMPO_72: '',
    CAMPO_73: '',
    CAMPO_74: '',
    CAMPO_75: '',
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
    CAMPO_91: '',
    CAMPO_92: '',
    CAMPO_93: '',
    CAMPO_94: '',
    CAMPO_95: '',
    CAMPO_96: '',
    CAMPO_97: '',
    CAMPO_98: '',
    CAMPO_99: '',
    CAMPO_100: '',
    CAMPO_101: '',
    CAMPO_102: '',
    CAMPO_103: '',
    CAMPO_104: '',
    CAMPO_105: '',
    CAMPO_106: '',
    CAMPO_107: '',
    CAMPO_108: '',
    CAMPO_109: '',
    CAMPO_110: '',
    CAMPO_111: '',
    CAMPO_112: '',
    CAMPO_113: '',
    CAMPO_114: '',
    CAMPO_114_1: '',
    CAMPO_114_2: '',
    CAMPO_114_3: '',
    CAMPO_114_4: '',
    CAMPO_114_5: '',
    CAMPO_114_6: '',
    CAMPO_115: '',
    CAMPO_116: '',
    CAMPO_117: '',
    CAMPO_118: '',
    CAMPO_119: '',
    CAMPO_120: '',
    CAMPO_121: '',
    CAMPO_122: '',
    CAMPO_123: '',
    CAMPO_124: '',
    CAMPO_125: '',
    CAMPO_126: '',
    CAMPO_127: '',
    CAMPO_128: '',
    CAMPO_129: '',
    CAMPO_130: '',
    CAMPO_131: '',
    CAMPO_132: '',
    CAMPO_133: '',
    CAMPO_134: '',

  }









  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  Hemofilia: any
  Cancer: any;
  hemofiliafiltro = ""
  opcion: any;
  rows = 10;
  page = 0;
  Tipodocumento = ''
  numerodocumeto = ''
  VALIDACION_SOPORTE = ''
  VALIDACION_REGISTRO = ''
  totalRecords

  constructor(private cacCancerServiceService: CACCancerServiceService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService, private modalService: NgbModal, public tabs: AppComponent, private opcionesListasCancerService: OpcionesListasCancerService, private hemofiliaService: HemofiliaService) { }

  ngOnInit(): void {
    // this.dtoptiontables()
    this.CargarRegistroscancer();
    this.numeroRegistro();
    

  this.CargarRegistroscancer();
  this.numeroRegistro();
  this.cargarCancer5();
  this.cargarCancer8();
  this.cargarCancer10();
  this.cargarCancer12();
  this.cargarCancer13();
  this.CargarOcupacion();
  this.CargarMunicipioresidencia();
  }

  onRowSelect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.cacCancerServiceService.CargarIdentificacion(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        console.log(this.opcion)
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm/' + CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm');
      }

    })
  }

  onRowUnselect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.cacCancerServiceService.CargarIdentificacion(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm/' + CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm');
      }

    })
  }

  CargarRegistroscancer() {
    this.cacCancerServiceService.CargarRegistrocancer(this.Tipodocumento, this.numerodocumeto, this.page, this.rows).subscribe(res => {
      this.Cancer = res
    })
  }

  numeroRegistro() {
    this.cacCancerServiceService.numeroRegistro().subscribe(res => {
      this.totalRecords = res;
      console.log(res)
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  Seleccionarusuario(data: any): void {
    let prueba: any
    this.ngxSpinnerService.start();
    for (let i = 0; i < this.Cancer.length; i++) {
      if (this.Cancer[i].CAMPO_6 == data[5]) {
        this.cacCancerServiceService.CargarIdentificacion(data[5]).subscribe(res => {
          this.opcion = res;
          console.log(this.opcion)
          if (this.opcion.length > 0) {
            this.ngxSpinnerService.stop();
            this.Router.navigate(['Hemofilia-frm/', data[5]]);
          } else {
            this.ngxSpinnerService.stop();
            this.Router.navigate(['Hemofilia-frm']);
          }

        })

      }
    }

  }

  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.CargarRegistroscancer();
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
  limpiarFiltros() {
    this.Tipodocumento = '';
    this.numerodocumeto = '';
    this.CargarRegistroscancer();
  }
  formularioNuevo() {
    this.tabs.crearTab('Registro', 'Cancer-frm');
  }

  guardarDatos() {
    this.cacCancerServiceService.CargarIdentificacion(this.cancer.CAMPO_6).subscribe(res => {
      this.existe = res;

      if (this.existe == '') {
        let entro = false;
        if (this.cancer.CAMPO_1 == '') {
          this._cancer_1 = false;
          entro = true;
        } else {
          this._cancer_1 = true;
        }

        if (this.cancer.CAMPO_3 == '') {
          this._cancer_3 = false;
          entro = true;
        } else {
          this._cancer_3 = true;
        }
        if (this.cancer.CAMPO_5 == '') {
          this._cancer_5 = false;
          entro = true;
        } else {
          this._cancer_5 = true;
        }

        if (this.cancer.CAMPO_6 == '') {
          this._cancer_6 = false;
          entro = true;
        } else {
          this._cancer_6 = true;
        }
        if (this.cancer.CAMPO_7 == '') {
          this._cancer_7 = false;
          entro = true;
        } else {
          this._cancer_7 = true;
        }
        if (this.cancer.CAMPO_8 == '') {
          this._cancer_8 = false;
          entro = true;
        } else {
          this._cancer_8 = true;
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
          let cancer_9 = this.cancer.CAMPO_9?.split('.')[0];
          this.cancer.CAMPO_9 = cancer_9;

          let cancer_14 = this.cancer.CAMPO_14?.split('.')[0];
          this.cancer.CAMPO_14 = cancer_14;

          delete this.cancer.ID_CUENTA_CANCER;
          this.cacCancerServiceService.GuardarCancer(this.cancer).subscribe(res => {
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
                this.tabs.crearTab('Cancer-edit', 'Cancer-frm/' + this.CC);
                this.limpiarFormulario();
              }
            })
          })
        }
      }
    })
  }

  limpiarFormulario() {
    this.cancer.CAMPO_1 = '';
    this.cancer.CAMPO_2 = '';
    this.cancer.CAMPO_3 = '';
    this.cancer.CAMPO_4 = '';
    this.cancer.CAMPO_5 = '';
    this.cancer.CAMPO_6 = '';
    this.cancer.CAMPO_7 = '';
    this.cancer.CAMPO_8 = '';
    this.cancer.CAMPO_9 = '';
    this.cancer.CAMPO_10 = '';
    this.cancer.CAMPO_11 = '';
    this.cancer.CAMPO_12 = '';
    this.cancer.CAMPO_13 = '';
    this.cancer.CAMPO_14 = '';
    this.cancer.CAMPO_15 = '';
    this.cancer.CAMPO_16 = '';
    this.cancer.CAMPO_133 = '';
    this.desplegar = true;
    this.NumIdentificacion = true;
    this.existeAfliado = false;
    this.Guardo = true;
    this.modalService.dismissAll();
  }

  buscarCAC_cancer() {
    this.cacCancerServiceService.CargarCAC(this.cancer.CAMPO_6, this.cancer.CAMPO_5).subscribe(res => {
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
            this.tabs.crearTab('Cancer-edit', 'Cancer-frm/' + this.CC);
            this.limpiarFormulario();
          } else {
            this.limpiarFormulario();
          }
        })

      }
    })
  }
  editar() {
    this.tabs.crearTab('Cancer-edit', 'Cancer-frm/' + this.CC);
    this.limpiarFormulario();
  }


  buscarAfiliado() {
    this.afiliado = [];
    this.cacCancerServiceService.CargarAfiliado(this.cancer.CAMPO_6, this.cancer.CAMPO_5).subscribe(res => {
      this.afiliado.push(res)
      if (this.afiliado.length != 0) {
        this.cancer.CAMPO_1 = this.afiliado[0].PRIMER_NOMBRE;
        this.cancer.CAMPO_3 = this.afiliado[0].PRIMER_APELLIDO;
        this.cancer.CAMPO_7 = this.afiliado[0].FECHA_NACIMIENTO
        this.cancer.CAMPO_8 = this.afiliado[0].SEXO;
        this.cancer.CAMPO_10 = this.afiliado[0].TIPO_REGIMEN;
        this.cancer.CAMPO_16 = this.afiliado[0].FECHA_AFILIACION;
        this.existeAfliado = true;
        this.NumIdentificacion = true;
        this.desplegar = false;
        this.Guardo = false;
        if (this.afiliado[0].OTROS_NOMBRES != null) {
          this.cancer.CAMPO_2 = this.afiliado[0].OTROS_NOMBRES;
        }
        if (this.afiliado[0].OTROS_APELLIDOS != null) {
          this.cancer.CAMPO_4 = this.afiliado[0].OTROS_APELLIDOS;
        }
        if (this.afiliado[0].OCUPACION != null) {
          this.cancer.CAMPO_9 = this.afiliado[0].OCUPACION;
        }
        if (this.afiliado[0].PERTENENCIA_ETNICA != null) {
          this.cancer.CAMPO_12 = this.afiliado[0].PERTENENCIA_ETNICA;
        }
        if (this.afiliado[0].CODIGO_DEPARTAMENTO != '' && this.afiliado[0].CODIGO_MUNICIPIO != '') {
          this.cancer.CAMPO_14 = this.afiliado[0].CODIGO_DEPARTAMENTO + this.afiliado[0].CODIGO_MUNICIPIO;
        }
        if (this.afiliado[0].TELEFONO != null) {
          this.cancer.CAMPO_15 = this.afiliado[0].TELEFONO;
        }
        if (this.afiliado[0].CODIGO_BDUA != null) {
          this.cancer.CAMPO_133 = this.afiliado[0].CODIGO_BDUA;
        }

      }
    })

  }

  validacionNuevo() {
    if (this.cancer.CAMPO_5 != '' && this.cancer.CAMPO_6 != '') {
      this.buscarCAC_cancer();
      console.log('cac cancer')
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
    if (this.cancer.CAMPO_7 != '') {
      this.existeFecha = false;
      this.cancer_16 = false;
    } else {
      this.cancer_16 = true;
      this.existeFecha = true;
    }
  }
  CAMPO_7(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de nacimiento debe ser menor a la fecha actual',
      })
      this.cancer.CAMPO_7 = '';
    }
  }

  CAMPO_16(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de afiliación a la EAPB que reporta debe ser menor a la fecha actual',
      })
      this.cancer.CAMPO_16 = '';
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.cancer.CAMPO_16 = '';
    }
  }

  cargarCancer8() {
    this.opcionesListasCancerService.cargarCancer8().subscribe(res => {
      this.cancer8 = res;
    })
  }

  CargarOcupacion() {
    this.hemofiliaService.CargarOcupacion().subscribe(res => {
      this.Ocupacion = res;
    })
  }

  cargarCancer10() {
    this.opcionesListasCancerService.cargarCancer10().subscribe(res => {
      this.cancer10 = res;
    })
  }
  cargarCancer12() {
    this.opcionesListasCancerService.cargarCancer12().subscribe(res => {
      this.cancer12 = res;
    })
  }

  cargarCancer13() {
    this.opcionesListasCancerService.cargarCancer13().subscribe(res => {
      this.cancer13 = res;
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
   
  aprobar_1(dato) {
    if (dato != '') {
      this._cancer_1 = true;
    }
  }
  aprobar_3(dato) {
    if (dato != '') {
      this._cancer_3 = true;
    }
  }
  aprobar_5(dato) {
    if (dato != '') {
      this._cancer_5 = true;
      this.NumIdentificacion = false;
    }
  }
  aprobar_6(dato) {
    if (dato != '') {
      this._cancer_6 = true;
      this.CC = dato;
    }
  }
  aprobar_7(dato) {
    if (dato != '') {
      this._cancer_7 = true;
    }
  }
  aprobar_8(dato) {
    if (dato != '') {
      this._cancer_8 = true;
    }
  }
  cargarCancer5() {
    this.opcionesListasCancerService.cargarCancer5().subscribe(res => {
      this.cancer5 = res;
    })
  }






}
