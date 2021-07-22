import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service'
import { SoportesService } from '../../services/soportes/soportes.service'
import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hemofilia-soportes',
  templateUrl: './hemofilia-soportes.component.html',
  styleUrls: ['./hemofilia-soportes.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HemofiliaSoportesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  Hemofilia: any
  usuario: string
  file: File;
  nombrearchivo: string
  soporte: any
  Tipoarchivo = '';
  nombreArchivo = '';
  tipoArchivo = '';
  Anulado = '';
  private CC;
  rows = 10;
  page = 0;
  totalRecords
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private loginservice: LoginService, private soporteservice: SoportesService, activateRoute: ActivatedRoute,) {
    config.backdrop = 'static';
    config.keyboard = false; this.usuario = this.loginservice.getCurrentUser(); this.CC = activateRoute.snapshot.params['cc']
  }

  ngOnInit(): void {
    this.cargarsoporte();
    this.cargarNumeroRegistros();
  }

  cargarsoporte() {
    this.soporteservice.Cargarsoportes(this.CC, this.nombreArchivo, this.tipoArchivo, this.Anulado, this.page, this.rows).subscribe(res => {
      this.soporte = res;
      console.log(this.soporte)
    })
  }

  cargarNumeroRegistros() {
    this.soporteservice.numeroRegistro(this.CC).subscribe(res => {
      this.totalRecords = res;
    })
  }

  open(content: any) {
    this.modalService.open(content);
  }


  onphotoselected(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.Guargarsoporte();
  }

  Guargarsoporte() {
    console.log(this.Tipoarchivo)
    console.log(this.file)
    this.soporteservice.Guardarsoporte(this.nombrearchivo, this.usuario, this.Tipoarchivo, this.CC, this.file).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Almacenado!',
        text: 'Archivo cargado',
        icon: 'success',
        allowOutsideClick: false
      }
      ).then((result) => {
        if (result.value) {
          this.cargarsoporte();
          this.modalService.dismissAll();
        }
      })
    })
  }

  Descargarsoporte(PKId: string) {
    console.log(PKId)
    console.log('descarga')
    for (let i = 0; i < this.soporte.length; i++) {
      if (PKId == this.soporte[i].PKId) {
        const ruta = 'http://localhost:3000/' + this.soporte[i].Ruta_soporte
        console.log(ruta)
        saveAs(ruta)
      }
    }

  }
  paginador(event) {
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.cargarsoporte();
  }

}
