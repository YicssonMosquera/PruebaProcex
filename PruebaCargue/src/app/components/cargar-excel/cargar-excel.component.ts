import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { Res4505Service } from '../../services/res4505/res4505.service'
import { excel } from '../../models/datos'
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-cargar-excel',
  templateUrl: './cargar-excel.component.html',
  styleUrls: ['./cargar-excel.component.css']
})
export class CargarExcelComponent implements OnInit {
  array
  displayedColumns: string[] = ['select', 'PKId', 'Dato1', 'Dato2', 'Dato3', 'Dato4'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  excel: excel = {
    PKId: 0,
    Dato1: '',
    Dato2: '',
    Dato3: '',
    Dato4: ''
  }



  data = [];

  constructor(private res4505service: Res4505Service,) { }

  ngOnInit(): void {
    this.cargardatos();
  }


  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target)
    if (target.files.length !== 1) throw new Error("no puede usar multiples archivos")
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];


      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //console.log(this.data)
      this.data.forEach(element => {
        console.log(element[0])
      });
    }
    reader.readAsBinaryString(target.files[0]);
  }

  onphotoselected(event: HtmlInputEvent): void {
    let file: File;
    if (event.target.files && event.target.files[0]) {
      file = <File>event.target.files[0];

    }
  }




  cargarexcel() {
    //this.enviando();
    var n = this.data.length
    var cont = 0

    this.data.forEach(element => {
      delete this.excel.PKId
      this.excel.Dato1 = element[0],
        this.excel.Dato2 = element[1]
      this.excel.Dato3 = element[2]
      this.excel.Dato4 = element[3]
      console.log(this.excel)

      this.res4505service.Guardarexcel(this.excel).subscribe(res => {
        console.log(res)
        cont++
        if (cont == n) {
          Swal.fire({
            title: 'Almacenado!',
            text: 'Datos almacenados con exito.',
            icon: 'success',
            allowOutsideClick: false
          }

          ).then((result) => {
            if (result.value) {

            }
          })
        }
      })
    });


  }

  cargardatos() {
    let array: any
    this.res4505service.CargarDatos().subscribe(res => {
      array = res;
      console.log(array);
      this.dataSource.data = array;
      this
    })
  }



  enviando() {
    // this.spinner.show(undefined, { fullScreen: true });

    let timerInterval
    Swal.fire({
      icon: 'warning',
      showConfirmButton: false,
      title: 'Validando información, espere por favor.',
      allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA

      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              // b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },

    })
  }

  exportarExcel(){
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

}
