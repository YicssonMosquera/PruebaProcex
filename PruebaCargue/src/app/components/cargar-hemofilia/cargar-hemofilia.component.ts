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
  resultado
  selectedProducts
  nombreArchivo
  rows = 10;
  data
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
    this.ConsultarCargue();
    this.cosnultarNombreArchivo();
  }

  ConsultarCargue() {
    this.hemofiliaservice.consultarCargue(this.page, this.rows, this.radicado, this.nombreArchvio, this.vigente,this.estado).subscribe(res => {
      this.resultado = res;
      this.hemofilia = this.resultado.hemofilia;
      this.totalRecords = this.resultado.numero_registro;
      console.log(this.hemofilia);
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

  Seleccionarzip(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.pesoarchivo = event.target.files[0].size
    this.cargarhemofilia();
    console.log(this.pesoarchivo)
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
      console.log(res)

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

  cosnultarNombreArchivo(){
    this.hemofiliaservice.consultarNombreArchivo().subscribe(res=>{
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
