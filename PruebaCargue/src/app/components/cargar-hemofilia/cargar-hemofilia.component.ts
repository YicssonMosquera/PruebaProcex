import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import { LoginService } from '../../services/login/login.service';
import { saveAs } from 'file-saver'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CargarHemofiliaComponent implements OnInit {
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
  vigente = '';
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
  constructor(private hemofiliaservice: HemofiliaService, private loginservice: LoginService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,) {
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
    console.log(data)
  }

  descargarLogsTxt(data) {
    console.log(data)
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

  onUpload(event) {
    if (this.existFile) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Ya existe un archivo cargado, por favor eliminar y volver a cargar",
        showConfirmButton: true,
        allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
      })
      return;
    }
    var files = event.currentFiles;
    this.file = files[0];
    this.nombrearchivo = files[0].name;
    this.pesoarchivo = files[0].size;
    this.existFile = true;
    console.log(this.nombreArchivo)
    for (let i = 0; i < this.nombreArchivo.length; i++) {
       if(this.nombreArchivo[i].NOMBRE_ARCHIVO == this.nombrearchivo && this.nombreArchivo[i].USUARIO_CREACION == this.User  ){
        Swal.fire({
          title: 'Carga de archivo',
          text: "Usted ya cuenta con un archivo cargado, desea remplazarlo?",
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'No',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
          
        }).then((result) => {
          if (result.isConfirmed) {
            this.cargarhemofilia();
          }
        })

      }else{this.cargarhemofilia();}

    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
    }
    reader.readAsText(this.file)
  }



  Seleccionarzip(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.pesoarchivo = event.target.files[0].size
    this.cargarhemofilia();
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


  cargarhemofilia() {
    
    this.hemofiliaservice.cargamasivahemofilia(this.file, this.User, this.perfil).subscribe(res => {
      console.log(res);
      this.value6 = res;
      Swal.fire({
        title: 'Almacenado!',
        text: 'Archivo cargado',
        icon: 'success',
        allowOutsideClick: false
      }
      ).then((result) => {
        if (result.value) {
          this.ConsultarCargue();
        }
      })
    })
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
    this.vigente = '';
    this.estado = '';
    this.ConsultarCargue();
  }
}
