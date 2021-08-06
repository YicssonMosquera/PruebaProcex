import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import {CACCancerServiceService} from '../../services/CAC-cancer/cac-cancer-service.service';

@Component({
  selector: 'app-cancer-cargar',
  templateUrl: './cancer-cargar.component.html',
  styleUrls: ['./cancer-cargar.component.css']
})
export class CancerCargarComponent implements OnInit {
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

  constructor(private cacCancerServiceService:CACCancerServiceService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService,private modalService: NgbModal, public tabs:AppComponent) { }

  ngOnInit(): void {
    // this.dtoptiontables()
    this.CargarRegistroscancer();
    this.numeroRegistro();
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
    this.cacCancerServiceService.CargarIdentificacion(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        console.log(this.opcion)
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm/'+CC);
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
        this.tabs.crearTab('Registro', 'Cancer-frm/'+CC);
      } else {
        this.ngxSpinnerService.stop();
        this.tabs.crearTab('Registro', 'Cancer-frm');
      }

    })
  }

  CargarRegistroscancer() {
    this.cacCancerServiceService.CargarRegistrocancer(this.Tipodocumento,this.numerodocumeto,this.page,this.rows).subscribe(res => {
      this.Cancer = res
    })
  }

  numeroRegistro(){
    this.cacCancerServiceService.numeroRegistro().subscribe(res=>{
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

  paginador(event){
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
  formularioNuevo(){
    this.tabs.crearTab('Registro', 'Cancer-frm');
  }

}
