import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor( config: NgbModalConfig, private modalService: NgbModal) {config.backdrop = 'static';
  config.keyboard = false; }

  ngOnInit(): void {
    this.dtoptiontables();
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
    this.modalService.open(content,{ size: 'lg' });
  }


}
