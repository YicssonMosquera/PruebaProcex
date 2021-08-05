import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CuentaErcService} from '../../services/cuenta-erc/cuenta-erc.service'
import { AppComponent } from 'src/app/app.component';
import { OpcionesListasErcService } from 'src/app/services/opcionesListas-erc/opciones-listas-erc.service';

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
  constructor(private CuentaErcService:CuentaErcService,private Router: Router, private ngxSpinnerService: NgxUiLoaderService,private modalService: NgbModal, public tabs:AppComponent, private OpcionesListasErcService:OpcionesListasErcService) { }

  ngOnInit(): void {
    this.consultarDatos();
    this.cargarTipoDocumento5();
    this.cargarSexo8();
  }

  consultarDatos(){
    this.CuentaErcService.consultarDatos(this.page,this.rows,this.tipoDocumento,this.NoDocumento,this.primerNombre,this.primerApellido,this.sexo).subscribe(res=>{
      this.resultado = res;
      this.ERC = this.resultado.ERC;
      console.log( this.ERC)
      this.totalRecords = this.resultado.numero_registro;
    })
  }

  paginador(event){
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
        this.tabs.crearTab('ERC-frm', 'Erc-edit/'+CC);
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

  formularioNuevo(){
    this.tabs.crearTab('ERC-frm', 'Erc-frm');
  }

}
