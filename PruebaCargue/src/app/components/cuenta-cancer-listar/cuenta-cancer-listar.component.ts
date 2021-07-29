import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import {CACArtritisService} from '../../services/CAC-Artritis/cac-artritis.service'
@Component({
  selector: 'app-cuenta-cancer-listar',
  templateUrl: './cuenta-cancer-listar.component.html',
  styleUrls: ['./cuenta-cancer-listar.component.css']
})
export class CuentaCancerListarComponent implements OnInit {
  rows = 10;
  page = 0;
  artritis
  resultado
  NoIdentificacion = ''
  primerNombre = ''
  primerApellido= ''
  TipoIdentificaion = ''
  totalRecords

  constructor(private artritisservice:CACArtritisService,private Router: Router, private ngxSpinnerService: NgxUiLoaderService,private modalService: NgbModal, public tabs:AppComponent) { }

  ngOnInit(): void {
    this.consultarDatos();
  }

  consultarDatos(){
    this.artritisservice.consultarDatos(this.page,this.rows,this.NoIdentificacion,this.primerNombre,this.primerApellido,this.TipoIdentificaion).subscribe(res=>{
      this.resultado = res;
      this.artritis = this.resultado.artritis;
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
    this.NoIdentificacion = '';
    this.primerNombre = '';
    this.primerApellido = '';
    this.TipoIdentificaion = '';
    this.consultarDatos();
  }
  onRowSelect(event) {
    // const CC = event.data.CAMPO_6;
    // this.ngxSpinnerService.start();
    // this.hemofiliaservice.CargarRegistrohemofilia3(CC).subscribe(res => {
    //   this.opcion = res;
    //   console.log(this.opcion)
    //   if (this.opcion.length > 0) {
    //     this.ngxSpinnerService.stop();
    //     this.tabs.crearTab('Registro', 'Hemofilia-frm/'+CC);
    //   } else {
    //     this.ngxSpinnerService.stop();
    //     this.tabs.crearTab('Registro', 'Hemofilia-frm');
    //   }

    // })
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

  formularioNuevo(){
    this.tabs.crearTab('Registro', 'Cancer-frm');
  }

}
