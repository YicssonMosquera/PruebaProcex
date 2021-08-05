import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import { LoginService } from '../../services/login/login.service';
import * as FileSaver from 'file-saver';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogsHerroresService } from '../../services/logsHerrores/logs-herrores.service'
import Swal from 'sweetalert2';
import { of } from 'rxjs';

@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CargarHemofiliaComponent implements OnInit {
  idProcesoHemofilia;
  hemofilia
  uploadedFiles: any[] = [];
  resultado
  selectedProducts
  nombreArchivo
  existFile: boolean;
  rows = 10;
  data
  value6
  page = 0;
  totalRecords: 0;
  radicado = '';
  nombreArchvio = '';
  vigente = 'S';
  estado = '';
  filtro
  file: File;
  nombrearchivo: string;
  pesoarchivo: string;
  cargahemofilia: any
  UserFullName: string;
  dragAreaClass: string;

  private User
  private perfil

  @ViewChild('form') myform: ElementRef;

  constructor(private hemofiliaservice: HemofiliaService, private loginservice: LoginService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal, private logsHerrores: LogsHerroresService) {
    config.keyboard = false;
    this.User = this.loginservice.getCurrentUser();
    this.perfil = this.loginservice.getCurrentperfil();
    if (this.User) {
    }
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    },
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
        }
      });

  }


  ngAfterViewInit() {
    var prueba = this.myform
  }

  ngOnInit(): void {
    this.existFile = false;
    this.ConsultarCargue();
    this.cosnultarNombreArchivo();
  }

  ConsultarCargue() {
    this.hemofiliaservice.consultarCargue(this.page, this.rows, this.radicado, this.nombreArchvio, this.vigente, this.estado).subscribe(res => {
      this.resultado = res;
      this.hemofilia = this.resultado.hemofilia;
      this.totalRecords = this.resultado.numero_registro;
    })
  }

  descargarLogsExcel(data) {
    let EXCEL_EXTENSION = '.xlsx';
    const Ruta = 'http://localhost:3000/logsExcel/' + data+'.xlsx'
    this.logsHerrores.cargarLogsErrores(data).subscribe(res => {
      // const blob = new Blob([Ruta], { type: fileType });
      // const url = window.URL.createObjectURL(blob);
      saveAs(Ruta, data+'.xlsx');
    })
  }

  descargarLogsTxt(data) {
  }



  descargarArchivoCargado(NUMERO_RADICACION: string) {
    for (let i = 0; i < this.hemofilia.length; i++) {
      if (NUMERO_RADICACION == this.hemofilia[i].NUMERO_RADICACION) {
        const ruta = 'http://localhost:3000/' + this.hemofilia[i].RUTA_ARCHIVO
        console.log(ruta)
        saveAs(ruta)
      }
    }

  }
  onRemove() {
    this.existFile = false;
  }

  onUpload(event, form) {
    var vregexNaix = /^([A-Z]{9}\_)(0[1-9]|[1-2]\d|3[01])(0[1-9]|1[012])(\d{4}.zip)$/;
    // if (this.existFile) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: "Ya existe un archivo cargado, por favor eliminar y volver a cargar",
    //     showConfirmButton: true,
    //     allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
    //   })
    //   return;
    // }
    var files = event.currentFiles;
    this.file = files[0];
    this.nombrearchivo = files[0].name;
    this.pesoarchivo = files[0].size;
    this.existFile = true;
    if (!vregexNaix.test(this.nombrearchivo)) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: "el archivo debe contener el formato HEMOFILIA_DDMMYYYY, y debe ser .zip",
        showConfirmButton: true,
        allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
      })
      form.clear();
      return;

    }
    this.cargarhemofilia(form)
    // for (let i = 0; i < this.nombreArchivo.length; i++) {
    //   if (this.nombreArchivo[i].NOMBRE_ARCHIVO == this.nombrearchivo && this.nombreArchivo[i].USUARIO_CREACION == this.User) {
    //     Swal.fire({
    //       title: 'Carga de archivo',
    //       text: "Usted ya cuenta con un archivo cargado, desea remplazarlo?",
    //       icon: 'warning',
    //       showCancelButton: true,
    //       cancelButtonText: 'No',
    //       confirmButtonColor: '#3085d6',
    //       cancelButtonColor: '#d33',
    //       confirmButtonText: 'Si'

    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         this.cargarhemofilia(form);
    //       }
    //     })

    //   } else { }

    // }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
    }
    reader.readAsText(this.file)
  }

  Seleccionarzip(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.pesoarchivo = event.target.files[0].size
    this.cargarhemofilia(null);
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
    }
    reader.readAsText(this.file)
  }

  // // descomprimirzip(prueba: any) {
  // //   const jszip = new JSZip();
  // //   jszip.loadAsync(prueba).then((zip) => {
  // //     Object.keys(zip.files).forEach((filename) => {
  // //       zip.files[filename].async('string').then((fileData) => {
  // //         this.leertxt(fileData)
  // //       })
  // //     })
  // //   });
  // // }

  // leertxt(prueba: any) {
  //   this.cargahemofilia = prueba;
  //   for (const line of prueba.split(/[\r\n]+/)) {
  //     var nombre = line.split(',')[0];
  //   }
  // }

  cargarhemofilia(form) {
    this.hemofiliaservice.cargamasivahemofilia(this.file, this.User, this.perfil).subscribe(res => {
      var respuesta = res;

      if (respuesta['error']) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: respuesta['error'],
          showConfirmButton: true,
          allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
        })
        form.clear();
        return;
      } else {
        this.idProcesoHemofilia = respuesta;
      }

      //this.value6 = res;
      Swal.fire({
        title: 'Almacenado!',
        text: 'Archivo cargado',
        icon: 'success',
        allowOutsideClick: false
      }
      ).then((result) => {
        if (result.value) {
          this.hemofiliaservice.consultarUltimoArchivoCargado(this.idProcesoHemofilia).subscribe(res => {
            var respuesta = res[0];
            var registros = res[0].REGISTROS_PROCESADOS
            this.value6 = registros + 100 - registros;
            console.log(respuesta.ESTADO_PROCESO)
            if (respuesta.ESTADO_PROCESO == 4) {
              Swal.fire({
                icon: 'info',
                title: 'Estado del proceso',
                text: 'Con errores' + ' ' + 'Radicado' + ' ' + respuesta.NUMERO_RADICACION,
                showConfirmButton: true,
                allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
              }).then((result) => {
                if (result.value) {
                  this.ConsultarCargue();
                }
              })
            }
            if (respuesta.ESTADO_PROCESO == 2) {
              Swal.fire({
                icon: 'info',
                title: 'Estado del proceso',
                text: 'Exitoso' + ' ' + 'Radicado' + ' ' + respuesta.NUMERO_RADICACION,
                showConfirmButton: true,
                allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
              }).then((result) => {
                if (result.value) {
                  this.ConsultarCargue();
                }
              })
            }

          })
        }
      })
    })
  }

  consultarUltimoArchivoCargado() {
    console.log(this.idProcesoHemofilia)

  }


  cosnultarNombreArchivo() {
    this.hemofiliaservice.consultarNombreArchivo().subscribe(res => {
      this.nombreArchivo = res;
      console.log(this.nombreArchivo)
    })
  }
  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.ConsultarCargue();
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


  limpiarFiltros() {
    this.radicado = '';
    this.nombreArchvio = '';
    this.vigente = 'S';
    this.estado = '';
    this.ConsultarCargue();
  }

  fakeValidateUserData() {
    return of({
      userDate1: 1,
      userData2: 2
    });
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

}
