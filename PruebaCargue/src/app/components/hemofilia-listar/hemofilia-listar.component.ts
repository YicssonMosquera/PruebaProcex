import { Component, OnInit, OnDestroy } from '@angular/core';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { Hemofilia } from '../../models/hemofilia'
import { CACHemofiliaService } from 'src/app/services/CAC-Hemofilia/cac-hemofilia.service'
import Swal from 'sweetalert2';




@Component({
  selector: 'app-hemofilia-listar',
  templateUrl: './hemofilia-listar.component.html',
  styleUrls: ['./hemofilia-listar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HemofiliaListarComponent implements OnInit, OnDestroy {

  _hemofilia_1 = true;
  _hemofilia_3 = true;
  _hemofilia_5 = true;
  _hemofilia_6 = true;
  _hemofilia_7 = true;
  _hemofilia_8 = true;

  NumIdentificacion = true;
  afiliado = [];
  cuentaCAC = [];
  existeFecha = true;
  existeAfliado = false;
  desplegar = true;
  hemofilia_16 = true;
  cachemofiliaServiceService: any;
  tipodocumento: any;
  Sexo: any;
  RegimenAF: any;
  CEtnica: any;
  GProblacional: any;
  EstagFechacorte: any;
  

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  Hemofilia: any
  hemofiliafiltro = ""
  opcion: any;
  rows = 10;
  page = 0;
  Tipodocumento = '' 
  numerodocumeto = ''
  VALIDACION_SOPORTE = ''
  VALIDACION_REGISTRO = ''
  totalRecords

  hemofilia5: any;
  hemofilia8: any;
  Ocupacion: any;
  hemofilia10: any;
  hemofilia12: any;
  hemofilia13: any;
  municipioresidencia: any;
  yaGuardo = true;
  Guardo = true;
  existe
  CAC_hemofilia = 'no existe';
  nacimiento
  CC

  hemofilia: Hemofilia = {
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
    CAMPO_32_1: '',
    CAMPO_32_2: '',
    CAMPO_32_3: '',
    CAMPO_32_4: '',
    CAMPO_33: '',
    CAMPO_34: '',
    CAMPO_35: '',
    CAMPO_36: '',
    CAMPO_37: '',
    CAMPO_38: '',
    CAMPO_39: '',
    CAMPO_40: '',
    CAMPO_40_1: '',
    CAMPO_40_2: '',
    CAMPO_41: '',
    CAMPO_42: '',
    CAMPO_43: '',
    CAMPO_44: '',
    CAMPO_45: '',
    CAMPO_46: '',
    CAMPO_47_1: '',
    CAMPO_47_2: '',
    CAMPO_47_3: '',
    CAMPO_48: '',
    CAMPO_48_1: '',
    CAMPO_48_2: '',
    CAMPO_48_3: '',
    CAMPO_48_4: '',
    CAMPO_49: '',
    CAMPO_49_1: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_55_1: '',
    CAMPO_56: '',
    CAMPO_56_1: '',
    CAMPO_57: '',
    CAMPO_57_1: '',
    CAMPO_57_2: '',
    CAMPO_57_3: '',
    CAMPO_57_4: '',
    CAMPO_57_5: '',
    CAMPO_57_6: '',
    CAMPO_57_7: '',
    CAMPO_57_8: '',
    CAMPO_57_9: '',
    CAMPO_57_10: '',
    CAMPO_57_11: '',
    CAMPO_57_12: '',
    CAMPO_57_13: '',
    CAMPO_57_14: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_63: '',
    CAMPO_64: '',
    CAMPO_64_1: '',
    CAMPO_64_2: '',
    CAMPO_65: '',
    CAMPO_66: '',
    EDAD_CORTE: '',
    EDAD_ACTUAL: '',
    DOSIS_PROFILAXIS: '',
    VALIDACION_REGISTRO: 'N',
    VALIDACION_SOPORTE: '1'

  }

  constructor(private hemofiliaservice: HemofiliaService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService,private modalService: NgbModal, public tabs:AppComponent, private CACHemofiliaService:CACHemofiliaService) { }

  ngOnInit(): void {
    this.CargarRegistroshemofilia();
    this.numeroRegistro();
    this.Cargartipodocumento();
    this.CargarSexo();
    this.CargarRegimenafiliacion();
    this.CargarcodigoPertenenciaetnica();
    this.Cargargrupopoblacional();
    this.CargarOcupacion();
    this.CargarMunicipioresidencia();

  }

  // dtoptiontables() {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 10,
  //     "lengthChange": false,
  //     processing: false,
  //     searching: false,
  //     "scrollX": true,
  //     "order": [[6, "desc"]],
  //     rowCallback: (row: Node, data: any[] | Object, index: number) => {
  //       const self = this;
  //       // Unbind first in order to avoid any duplicate handler
  //       // (see https://github.com/l-lin/angular-datatables/issues/87)
  //       $('td', row).unbind('dblclick');
  //       $('td', row).bind('dblclick', () => {
  //         self.Seleccionarusuario(data);
  //       });
  //       return row;
  //     }
  //   }

  // }
  onRowSelect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.hemofiliaservice.CargarRegistrohemofilia3(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Hemofilia-frm/'+CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Hemofilia-frm');
      }

    })
  }

  // onRowUnselect(event) {
  //   const CC = event.data.CAMPO_6;
  //   this.ngxSpinnerService.start();
  //   this.hemofiliaservice.CargarRegistrohemofilia3(CC).subscribe(res => {
  //     this.opcion = res;
  //     console.log(this.opcion)
  //     if (this.opcion.length > 0) {
  //       this.ngxSpinnerService.stop();
  //       this.Router.navigate(['Hemofilia-frm/', CC]);
  //     } else {
  //       this.ngxSpinnerService.stop();
  //       this.Router.navigate(['Hemofilia-frm']);
  //     }

  //   })
  // }

  CargarRegistroshemofilia() {
    this.hemofiliaservice.CargarRegistrohemofilia(this.Tipodocumento,this.numerodocumeto,this.VALIDACION_SOPORTE,this.VALIDACION_REGISTRO,this.page,this.rows).subscribe(res => {
      this.Hemofilia = res
      console.log(res);
    })
  }

  numeroRegistro(){
    this.hemofiliaservice.numeroRegstro().subscribe(res=>{
      this.totalRecords = res;
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  Seleccionarusuario(data: any): void {
    let prueba: any
    this.ngxSpinnerService.start();
    for (let i = 0; i < this.Hemofilia.length; i++) {
      if (this.Hemofilia[i].CAMPO_6 == data[5]) {
        this.hemofiliaservice.CargarRegistrohemofilia3(data[5]).subscribe(res => {
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

  paginador(event){
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.CargarRegistroshemofilia();
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
    this.VALIDACION_SOPORTE = '';
    this.VALIDACION_REGISTRO = '';
    this.CargarRegistroshemofilia();
  }
  formularioNuevo(){
    this.tabs.crearTab('Registro', 'Hemofilia-frm');
  }

  aprobar_1(dato) {
    if (dato != '') {
      this._hemofilia_1 = true;
    }
  }
  aprobar_3(dato) {
    if (dato != '') {
      this._hemofilia_3 = true;
    }
  }
  aprobar_5(dato) {
    if (dato != '') {
      this._hemofilia_5 = true;
      this.NumIdentificacion = false;
    }
  }
  aprobar_6(dato) {
    if (dato != '') {
      this._hemofilia_6 = true;
      this.CC = dato;
    }
  }
  aprobar_7(dato) {
    if (dato != '') {
      this._hemofilia_7 = true;
    }
  }
  aprobar_8(dato) {
    if (dato != '') {
      this._hemofilia_8 = true;
    }
  }

  
  guardarDatos() {
    this.hemofiliaservice.CargarRegistrohemofilia3(this.hemofilia.CAMPO_6).subscribe(res => {
      this.existe = res;
      if (this.existe == '') {
        let entro = false;
        if (this.hemofilia.CAMPO_1 == '') {
          this._hemofilia_1 = false;
          entro = true;
        } else {
          this._hemofilia_1 = true;
        }
        if (this.hemofilia.CAMPO_3 == '') {
          this._hemofilia_3 = false;
          entro = true;
        } else {
          this._hemofilia_3 = true;
        }
        if (this.hemofilia.CAMPO_5 == '') {
          this._hemofilia_5 = false;
          entro = true;
        } else {
          this._hemofilia_5 = true;
        }

        if (this.hemofilia.CAMPO_6 == '') {
          this._hemofilia_6 = false;
          entro = true;
        } else {
          this._hemofilia_6 = true;
        }
        if (this.hemofilia.CAMPO_7 == '') {
          this._hemofilia_7 = false;
          entro = true;
        } else {
          this._hemofilia_7 = true;
        }
        if (this.hemofilia.CAMPO_8 == '') {
          this._hemofilia_8 = false;
          entro = true;
        } else {
          this._hemofilia_8 = true;
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
          let hemofilia_9 = this.hemofilia.CAMPO_9?.split('.')[0];
          this.hemofilia.CAMPO_9 = hemofilia_9;

          let hemofilia_14 = this.hemofilia.CAMPO_14?.split('.')[0];
          this.hemofilia.CAMPO_14 = hemofilia_14;

          delete this.hemofilia.ID_CUENTA_HEMOFILIA;
          this.CACHemofiliaService.Guardarhemofilia(this.hemofilia).subscribe(res => {
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
                this.tabs.crearTab('hemofilia-edit', 'Hemofilia-frm/' + this.CC);
                this.limpiarFormulario();
              }
            })
          })
        }
      }
    })
  }

  limpiarFormulario() {
    this.hemofilia.CAMPO_1 = '';
    this.hemofilia.CAMPO_2 = '';
    this.hemofilia.CAMPO_3 = '';
    this.hemofilia.CAMPO_4 = '';
    this.hemofilia.CAMPO_5 = '';
    this.hemofilia.CAMPO_6 = '';
    this.hemofilia.CAMPO_7 = '';
    this.hemofilia.CAMPO_8 = '';
    this.hemofilia.CAMPO_9 = '';
    this.hemofilia.CAMPO_10 = '';
    this.hemofilia.CAMPO_11 = '';
    this.hemofilia.CAMPO_12 = '';
    this.hemofilia.CAMPO_13 = '';
    this.hemofilia.CAMPO_14 = '';
    this.hemofilia.CAMPO_15 = '';
    this.hemofilia.CAMPO_16 = '';
    this.hemofilia.CAMPO_65 = '';
    this.desplegar = true;
    this.NumIdentificacion = true;
    this.existeAfliado = false;
    this.Guardo = true;
    this.modalService.dismissAll();
  }

  buscarCAC_hemofilia() {
    this.CACHemofiliaService.CargarCAC(this.hemofilia.CAMPO_6, this.hemofilia.CAMPO_5).subscribe(res => {
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
            this.tabs.crearTab('hemofilia-edit', 'Hemofilia-frm/' + this.CC);
            this.limpiarFormulario();
          } else {
            this.limpiarFormulario();
          }
        })

      }
    })
  }
  editar() {
    this.tabs.crearTab('hemofilia-edit', 'Hemofilia-frm/' + this.CC);
    this.limpiarFormulario();
  }
  
  buscarAfiliado() {
    this.afiliado = [];
    this.CACHemofiliaService.CargarAfiliado(this.hemofilia.CAMPO_6, this.hemofilia.CAMPO_5).subscribe(res => {
      this.afiliado.push(res)
      if (this.afiliado.length != 0) {
        this.hemofilia.CAMPO_1 = this.afiliado[0].PRIMER_NOMBRE;
        this.hemofilia.CAMPO_3 = this.afiliado[0].PRIMER_APELLIDO;
        this.hemofilia.CAMPO_7 = this.afiliado[0].FECHA_NACIMIENTO
        this.hemofilia.CAMPO_8 = this.afiliado[0].SEXO;
        this.hemofilia.CAMPO_10 = this.afiliado[0].TIPO_REGIMEN;
        this.hemofilia.CAMPO_16 = this.afiliado[0].FECHA_AFILIACION;
        this.hemofilia_16 = false;
        this.existeAfliado = true;
        this.NumIdentificacion = true;
        this.desplegar = false;
        this.Guardo = false;
        if (this.afiliado[0].OTROS_NOMBRES != null) {
          this.hemofilia.CAMPO_2 = this.afiliado[0].OTROS_NOMBRES;
        }
        if (this.afiliado[0].OTROS_APELLIDOS != null) {
          this.hemofilia.CAMPO_4 = this.afiliado[0].OTROS_APELLIDOS;
        }
        if (this.afiliado[0].OCUPACION != null) {
          this.hemofilia.CAMPO_9 = this.afiliado[0].OCUPACION;
        }
        if (this.afiliado[0].PERTENENCIA_ETNICA != null) {
          this.hemofilia.CAMPO_12 = this.afiliado[0].PERTENENCIA_ETNICA;
        }
        if (this.afiliado[0].CODIGO_DEPARTAMENTO != '' && this.afiliado[0].CODIGO_MUNICIPIO != '') {
          this.hemofilia.CAMPO_14 = this.afiliado[0].CODIGO_DEPARTAMENTO + this.afiliado[0].CODIGO_MUNICIPIO;
        }
        if (this.afiliado[0].TELEFONO != null) {
          this.hemofilia.CAMPO_15 = this.afiliado[0].TELEFONO;
        }
        if (this.afiliado[0].CODIGO_BDUA != null) {
          this.hemofilia.CAMPO_65 = this.afiliado[0].CODIGO_BDUA;
        }

      }
    })

  }

  validacionNuevo() {
    if (this.hemofilia.CAMPO_5 != '' && this.hemofilia.CAMPO_6 != '') {
      this.buscarCAC_hemofilia();
      this.buscarAfiliado();
      if (this.afiliado.length == 0) {
        console.log('if de desplegar')
        this.Guardo = false;
        this.desplegar = false;
      }
    }
  }
  cargarNacimiento(_nacimiento) {
    this.nacimiento = new Date(_nacimiento);
    if (this.hemofilia.CAMPO_7 != '') {
      this.existeFecha = false;
      this.hemofilia_16 = false;
    } else {
      this.hemofilia_16 = true;
      this.existeFecha = true;
    }
  }
  CAMPO_7(hemofilia) {
    var startDate = new Date(hemofilia);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de nacimiento debe ser menor a la fecha actual',
      })
      this.hemofilia.CAMPO_7 = '';
    }
  }

  CAMPO_16(hemofilia) {
    var startDate = new Date(hemofilia);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de afiliación a la EAPB que reporta debe ser menor a la fecha actual',
      })
      this.hemofilia.CAMPO_16 = '';
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.hemofilia.CAMPO_16 = '';
    }
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

  CargarOcupacion() {
    this.hemofiliaservice.CargarOcupacion().subscribe(res => {
      this.Ocupacion = res;
    })
  }

  CargarMunicipioresidencia() {
    this.hemofiliaservice.CargarMunicipioresidencia().subscribe(res => {
      this.municipioresidencia = res;
    })
  }


  formulario(content5: any) {
    this.modalService.open(content5, { size: 'xl', scrollable: true });
  }




}
