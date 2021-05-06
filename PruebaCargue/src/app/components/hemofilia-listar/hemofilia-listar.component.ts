import { Hemofilia } from './../../models/hemofilia';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'
import { DataTableDirective } from 'angular-datatables';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-hemofilia-listar',
  templateUrl: './hemofilia-listar.component.html',
  styleUrls: ['./hemofilia-listar.component.css']
})
export class HemofiliaListarComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  Hemofilia: any
  hemofiliafiltro = ""
  opcion:any;

  constructor(private hemofiliaservice: HemofiliaService, private Router:Router, private ngxSpinnerService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.dtoptiontables()
    this.CargarRegistroshemofilia();
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

  CargarRegistroshemofilia() {
    this.hemofiliaservice.CargarRegistrohemofilia().subscribe(res => {
      this.Hemofilia = res
      this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  Seleccionarusuario(data: any): void {
    let prueba:any
    this.ngxSpinnerService.start();
    for (let i = 0; i < this.Hemofilia.length; i++) {
      if (this.Hemofilia[i].CAMPO_6 == data[5]) {
        this.hemofiliaservice.CargarRegistrohemofilia3(data[5]).subscribe(res=>{
          this.opcion = res;
          if(this.opcion.length > 0 ){
           this.ngxSpinnerService.stop();
            this.Router.navigate(['Hemofilia-frm/', data[5]]);
          }else{
            this.ngxSpinnerService.stop();
            this.Router.navigate(['Hemofilia-frm']);
          }

        })

      }
    }

  }

}
