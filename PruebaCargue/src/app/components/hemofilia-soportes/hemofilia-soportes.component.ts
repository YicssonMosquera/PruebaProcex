import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../services/login/login.service'
import {SoportesService} from '../../services/soportes/soportes.service'
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
  usuario:string
  file:File;
  nombrearchivo:string
  Tipoarchivo = '';
  private CC;
  constructor( config: NgbModalConfig, private modalService: NgbModal,
  private loginservice:LoginService,private soporteservice:SoportesService,activateRoute: ActivatedRoute,) {config.backdrop = 'static';
  config.keyboard = false;  this.usuario = this.loginservice.getCurrentUser(); this.CC = activateRoute.snapshot.params['cc'] }

  ngOnInit(): void {
    this.dtoptiontables();
    console.log(this.usuario)
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
        //  self.Seleccionarusuario(data);
        });
        return row;
      }
    }

  }
  open(content:any) {
    this.modalService.open(content);
  }


  onphotoselected(event:any):void{
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
  }

  Guargarsoporte(){
    console.log(this.Tipoarchivo)
   console.log(this.file)
  this.soporteservice.Guardarsoporte(this.nombrearchivo,this.usuario,this.Tipoarchivo,this.CC,this.file).subscribe(res=>{
    console.log(res)
  })
  }


}
