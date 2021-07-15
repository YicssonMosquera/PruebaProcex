import { Component, OnInit, OnDestroy } from '@angular/core';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hemofilia-listar',
  templateUrl: './hemofilia-listar.component.html',
  styleUrls: ['./hemofilia-listar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HemofiliaListarComponent implements OnInit, OnDestroy {

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

  constructor(private hemofiliaservice: HemofiliaService, private Router: Router, private ngxSpinnerService: NgxUiLoaderService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtoptiontables()
    this.CargarRegistroshemofilia();
    this.numeroRegistro();
  }

  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
      searching: false,
      "scrollX": true,
      "order": [[6, "desc"]],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('dblclick');
        $('td', row).bind('dblclick', () => {
          self.Seleccionarusuario(data);
        });
        return row;
      }
    }

  }
  onRowSelect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.hemofiliaservice.CargarRegistrohemofilia3(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.Router.navigate(['Hemofilia-frm/', CC]);
      } else {
        this.ngxSpinnerService.stop();
        this.Router.navigate(['Hemofilia-frm']);
      }

    })
  }

  onRowUnselect(event) {
    const CC = event.data.CAMPO_6;
    this.ngxSpinnerService.start();
    this.hemofiliaservice.CargarRegistrohemofilia3(CC).subscribe(res => {
      this.opcion = res;
      console.log(this.opcion)
      if (this.opcion.length > 0) {
        this.ngxSpinnerService.stop();
        this.Router.navigate(['Hemofilia-frm/', CC]);
      } else {
        this.ngxSpinnerService.stop();
        this.Router.navigate(['Hemofilia-frm']);
      }

    })
  }

  CargarRegistroshemofilia() {
    this.hemofiliaservice.CargarRegistrohemofilia(this.Tipodocumento,this.numerodocumeto,this.VALIDACION_SOPORTE,this.VALIDACION_REGISTRO,this.page,this.rows).subscribe(res => {
      this.Hemofilia = res
    })
  }

  numeroRegistro(){
    this.hemofiliaservice.numeroRegstro().subscribe(res=>{
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


}
