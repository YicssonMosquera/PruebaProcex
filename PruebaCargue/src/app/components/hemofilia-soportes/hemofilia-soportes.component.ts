import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../services/login/login.service'
import {SoportesService} from '../../services/soportes/soportes.service'
import {saveAs} from 'file-saver'
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
  soporte:any
  Tipoarchivo = '';
  private CC;
  constructor( config: NgbModalConfig, private modalService: NgbModal,
  private loginservice:LoginService,private soporteservice:SoportesService,activateRoute: ActivatedRoute,) {config.backdrop = 'static';
  config.keyboard = false;  this.usuario = this.loginservice.getCurrentUser(); this.CC = activateRoute.snapshot.params['cc'] }

  ngOnInit(): void {
    this.dtoptiontables();
    this.cargarsoporte();
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

  cargarsoporte(){
    this.soporteservice.Cargarsoportes(this.CC).subscribe(res=>{
      this.soporte = res;
      console.log(this.soporte)
    })
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
    window.location.reload();
  })
  }

  Descargarsoporte(PKId:string){
    for (let i = 0; i < this.soporte.length; i++) {
      if(PKId == this.soporte[i].PKId){
        const ruta = 'http://localhost:3000/' + this.soporte[i].Ruta_soporte
        console.log(ruta)
        saveAs(ruta)
      }
    }
   
  }



}
