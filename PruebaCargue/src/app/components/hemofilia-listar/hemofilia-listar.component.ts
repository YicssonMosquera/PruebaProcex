import { Component, OnInit,OnDestroy } from '@angular/core';
import {HemofiliaService} from '../../services/hemofilia/hemofilia.service'
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hemofilia-listar',
  templateUrl: './hemofilia-listar.component.html',
  styleUrls: ['./hemofilia-listar.component.css']
})
export class HemofiliaListarComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  Hemofilia:any

  constructor(private hemofiliaservice:HemofiliaService) { }

  ngOnInit(): void {
    this. dtoptiontables()
    this.CargarRegistroshemofilia();
  }

  dtoptiontables(){
    this.dtOptions = {
    pagingType: 'full_numbers',
     pageLength: 10,
     "lengthChange": false,
      processing: false,
      searching: false,
      "scrollX": true,
      "order": [[ 6, "desc" ]],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
         // self.someClickHandler(data);
        });
        return row;
      }
    }
  
  }

  CargarRegistroshemofilia(){
    this.hemofiliaservice.CargarRegistrohemofilia().subscribe(res=>{
     this.Hemofilia = res
     this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
