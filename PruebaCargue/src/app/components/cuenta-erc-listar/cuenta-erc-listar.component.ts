import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CuentaErcService } from '../../services/cuenta-erc/cuenta-erc.service'
import { AppComponent } from 'src/app/app.component';
import { OpcionesListasErcService } from 'src/app/services/opcionesListas-erc/opciones-listas-erc.service';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import Swal from 'sweetalert2';
import { ERC } from 'src/app/models/erc';

@Component({
  selector: 'app-cuenta-erc-listar',
  templateUrl: './cuenta-erc-listar.component.html',
  styleUrls: ['./cuenta-erc-listar.component.css']
})
export class CuentaErcListarComponent implements OnInit {
  rows = 10;
  page = 0;
  tipoDocumento = ''
  NoDocumento = ''
  primerNombre = ''
  primerApellido = ''
  sexo = ''
  ERC
  resultado
  totalRecords
  opcion
  C4_CAMPO_5
  C7_CAMPO_8

  _erc_1 = true;
  _erc_3 = true;
  _erc_5 = true;
  _erc_6 = true;
  _erc_7 = true;
  _erc_8 = true;

  NumIdentificacion = true;
  afiliado = [];
  cuentaCAC = [];
  existeFecha = true;
  existeAfliado = false;
  desplegar = true;
  erc_15 = true;
  C8_CAMPO_9
  C10_CAMPO_11
  C11_CAMPO_12
  C12_CAMPO_13
  C17_CAMPO_18

  erc5: any;
  erc8: any;
  Ocupacion: any;
  erc10: any;
  erc12: any;
  erc13: any;
  municipioresidencia: any;
  yaGuardo = true;
  Guardo = true;
  existe
  nacimiento
  CC
  erc: ERC = {
    ID_CUENTA_ERC: '',
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
    CAMPO_19_1: '',
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_21_1: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_27_1: '',
    CAMPO_28: '',
    CAMPO_28_1: '',
    CAMPO_29: '',
    CAMPO_29_1: '',
    CAMPO_30: '',
    CAMPO_30_1: '',
    CAMPO_31: '',
    CAMPO_31_1: '',
    CAMPO_32: '',
    CAMPO_32_1: '',
    CAMPO_33: '',
    CAMPO_33_1: '',
    CAMPO_34: '',
    CAMPO_34_1: '',
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
    CAMPO_47: '',
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
    CAMPO_62_1: '',
    CAMPO_62_2: '',
    CAMPO_62_3: '',
    CAMPO_62_4: '',
    CAMPO_62_5: '',
    CAMPO_62_6: '',
    CAMPO_62_7: '',
    CAMPO_62_8: '',
    CAMPO_62_9: '',
    CAMPO_62_10: '',
    CAMPO_62_11: '',
    CAMPO_63: '',
    CAMPO_63_1: '',
    CAMPO_64: '',
    CAMPO_65: '',
    CAMPO_66: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_69_1: '',
    CAMPO_69_2: '',
    CAMPO_69_3: '',
    CAMPO_69_4: '',
    CAMPO_69_5: '',
    CAMPO_69_6: '',
    CAMPO_69_7: '',
    CAMPO_70: '',
    CAMPO_70_1: '',
    CAMPO_70_2: '',
    CAMPO_70_3: '',
    CAMPO_70_4: '',
    CAMPO_70_5: '',
    CAMPO_70_6: '',
    CAMPO_70_7: '',
    CAMPO_70_8: '',
    CAMPO_70_9: '',
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
    CAMPO_80_1: '',
  }


  constructor(private CuentaErcService: CuentaErcService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService, private modalService: NgbModal, public tabs: AppComponent, private OpcionesListasErcService: OpcionesListasErcService,private hemofiliaService: HemofiliaService) { }

  ngOnInit(): void {
    this.consultarDatos();
    this.cargarTipoDocumento5();
    this.cargarSexo8();
  }

  consultarDatos() {
    this.CuentaErcService.consultarDatos(this.page, this.rows, this.tipoDocumento, this.NoDocumento, this.primerNombre, this.primerApellido, this.sexo).subscribe(res => {
      this.resultado = res;
      this.ERC = this.resultado.ERC;
      console.log(this.ERC)
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
    this.tipoDocumento = '';
    this.primerNombre = '';
    this.primerApellido = '';
    this.NoDocumento = '';
    this.sexo = '';
    this.consultarDatos();
  }
  onRowSelect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.CuentaErcService.getOne(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('ERC-frm', 'Erc-edit/' + CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('ERC-frm', 'Erc-frm');
      }

    })
  }
  // // Cargartipodocumento() {
  // //   this.hemofiliaservice.CargarTipodocumento().subscribe(res => {
  // //     this.identificacion = res;
  // //   })
  // }
  cargarTipoDocumento5() {
    this.OpcionesListasErcService.cargarTipoDocumento5().subscribe(res => {
      this.C4_CAMPO_5 = res;
    })
  }

  cargarSexo8() {
    this.OpcionesListasErcService.cargarSexo8().subscribe(res => {
      this.C7_CAMPO_8 = res;
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

  sexo1(content4: any) {
    this.modalService.open(content4, { size: 'sm', centered: true });
  }

  formularioNuevo() {
    this.tabs.crearTab('ERC-frm', 'Erc-frm');
  }

  aprobar_1(dato) {
    if (dato != '') {
      this._erc_1 = true;
    }
  }
  aprobar_3(dato) {
    if (dato != '') {
      this._erc_3 = true;
    }
  }
  aprobar_5(dato) {
    if (dato != '') {
      this._erc_5 = true;
      this.NumIdentificacion = false;
    }
  }
  aprobar_6(dato) {
    if (dato != '') {
      this._erc_6 = true;
      this.CC = dato;
    }
  }
  aprobar_7(dato) {
    if (dato != '') {
      this._erc_7 = true;
    }
  }
  aprobar_8(dato) {
    if (dato != '') {
      this._erc_8 = true;
    }
  }


  guardarDatos() {
    this.CuentaErcService.getOne(this.erc.CAMPO_6).subscribe(res => {
      this.existe = res;

      if (this.existe == '') {
        let entro = false;
        if (this.erc.CAMPO_1 == '') {
          this._erc_1 = false;
          entro = true;
        } else {
          this._erc_1 = true;
        }

        if (this.erc.CAMPO_3 == '') {
          this._erc_3 = false;
          entro = true;
        } else {
          this._erc_3 = true;
        }
        if (this.erc.CAMPO_5 == '') {
          this._erc_5 = false;
          entro = true;
        } else {
          this._erc_5 = true;
        }

        if (this.erc.CAMPO_6 == '') {
          this._erc_6 = false;
          entro = true;
        } else {
          this._erc_6 = true;
        }
        if (this.erc.CAMPO_7 == '') {
          this._erc_7 = false;
          entro = true;
        } else {
          this._erc_7 = true;
        }
        if (this.erc.CAMPO_8 == '') {
          this._erc_8 = false;
          entro = true;
        } else {
          this._erc_8 = true;
        }

        if (entro == true) {
          Swal.fire({
            icon: 'error',
            title: '¡Advertencia!',
            text: 'Digite los campos obligatorios',
          })
        } else {
          delete this.erc.ID_CUENTA_ERC;
          this.yaGuardo = false;
          this.Guardo = true;
          let erc_9 = this.erc.CAMPO_9?.split('.')[0];
          this.erc.CAMPO_9 = erc_9;

          let erc_13 = this.erc.CAMPO_13?.split('.')[0];
          this.erc.CAMPO_13 = erc_13;

          this.CuentaErcService.GuardarErc(this.erc).subscribe(res => {
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
                this.tabs.crearTab('Erc-edit', 'Erc-edit/' + this.CC);
                this.limpiarFormulario();
              }
            })
          })
        }
      }
    })
  }
  limpiarFormulario() {
    this.erc.CAMPO_1 = '';
    this.erc.CAMPO_2 = '';
    this.erc.CAMPO_3 = '';
    this.erc.CAMPO_4 = '';
    this.erc.CAMPO_5 = '';
    this.erc.CAMPO_6 = '';
    this.erc.CAMPO_7 = '';
    this.erc.CAMPO_8 = '';
    this.erc.CAMPO_9 = '';
    this.erc.CAMPO_10 = '';
    this.erc.CAMPO_11 = '';
    this.erc.CAMPO_12 = '';
    this.erc.CAMPO_13 = '';
    this.erc.CAMPO_14 = '';
    this.erc.CAMPO_15 = '';
    this.erc.CAMPO_16 = '';
    this.desplegar = true;
    this.NumIdentificacion = true;
    this.existeAfliado = false;
    this.modalService.dismissAll();
    this.Guardo = true;

  }


  buscarCAC_erc() {
    this.CuentaErcService.CargarCAC(this.erc.CAMPO_6, this.erc.CAMPO_5).subscribe(res => {
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
            this.tabs.crearTab('Erc-edit', 'Erc-edit/' + this.CC);
            this.limpiarFormulario();
          } else {
            this.limpiarFormulario();
          }
        })

      }
    })
  }

  editar() {
    this.tabs.crearTab('Erc-edit', 'Erc-edit/' + this.CC);
    this.limpiarFormulario();
  }
  buscarAfiliado() {
    this.afiliado = [];
    this.CuentaErcService.CargarAfiliado(this.erc.CAMPO_6, this.erc.CAMPO_5).subscribe(res => {
      this.afiliado.push(res)
      if (this.afiliado.length != 0) {
        this.erc.CAMPO_1 = this.afiliado[0].PRIMER_NOMBRE;
        this.erc.CAMPO_3 = this.afiliado[0].PRIMER_APELLIDO;
        this.erc.CAMPO_7 = this.afiliado[0].FECHA_NACIMIENTO
        this.erc.CAMPO_8 = this.afiliado[0].SEXO;
        // this.erc.CAMPO_10 = this.afiliado[0].TIPO_REGIMEN;
        this.erc.CAMPO_15 = this.afiliado[0].FECHA_AFILIACION;
        this.existeAfliado = true;
        this.NumIdentificacion = true;
        this.Guardo = false;
        this.desplegar = false;
        if (this.afiliado[0].OTROS_NOMBRES != null) {
          this.erc.CAMPO_2 = this.afiliado[0].OTROS_NOMBRES;
        }
        if (this.afiliado[0].OTROS_APELLIDOS != null) {
          this.erc.CAMPO_4 = this.afiliado[0].OTROS_APELLIDOS;
        }

        if (this.afiliado[0].PERTENENCIA_ETNICA != null) {
          this.erc.CAMPO_11 = this.afiliado[0].PERTENENCIA_ETNICA;
        }
        if (this.afiliado[0].CODIGO_DEPARTAMENTO != '' && this.afiliado[0].CODIGO_MUNICIPIO != '') {
          this.erc.CAMPO_13 = this.afiliado[0].CODIGO_DEPARTAMENTO + this.afiliado[0].CODIGO_MUNICIPIO;
        }
        if (this.afiliado[0].TELEFONO != null) {
          this.erc.CAMPO_14 = this.afiliado[0].TELEFONO;
        }
      }
    })

  }

  validacionNuevo() {
    if (this.erc.CAMPO_5 != '' && this.erc.CAMPO_6 != '') {
      this.buscarCAC_erc();
      console.log('cac erc')
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
    if (this.erc.CAMPO_7 != '') {
      this.existeFecha = false;
      this.erc_15 = false;
    } else {
      this.erc_15 = true;
      this.existeFecha = true;
    }
  }

  CAMPO_7(erc) {
    var startDate = new Date(erc);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de nacimiento debe ser menor a la fecha actual',
      })
      this.erc.CAMPO_7 = '';
    }
  }

  CAMPO_15(erc) {
    var startDate = new Date(erc);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de afiliación a la EPS que reporta debe ser menor a la fecha actual',
      })
      this.erc.CAMPO_15 = '';
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.erc.CAMPO_15 = '';
    }
  }

 
  
  cargarRegimenAfilicacion9() {
    this.OpcionesListasErcService.cargarRegimenAfilicacion9().subscribe(res => {
      this.C8_CAMPO_9 = res;
    })
  }
  cargarPertenenciaEtnica11() {
    this.OpcionesListasErcService.cargarPertenenciaEtnica11().subscribe(res => {
      this.C10_CAMPO_11 = res;
    })
  }
  cargarGrupopoblacional12() {
    this.OpcionesListasErcService.cargarGrupopoblacional12().subscribe(res => {
      this.C11_CAMPO_12 = res;
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
