import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css']
})
export class CargarHemofiliaComponent implements OnInit {
  file:File;
  nombrearchivo:string
  constructor() { }

  ngOnInit(): void {
  }

  Seleccionarzip(event:any):void{
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
    const bstr: string = e.target.result;
        this.descomprimirzip(this.file)
    }
    reader.readAsText(this.file) 
  }
  descomprimirzip(prueba:any){
    const jszip = new JSZip();
    jszip.loadAsync(prueba).then((zip) => {
     Object.keys(zip.files).forEach( (filename) => {   
       zip.files[filename].async('string').then( (fileData) => {
        this.leertxt(fileData) 
       })
     })
   });
  }

  leertxt(prueba:any){
  for (const line of prueba.split(/[\r\n]+/)){
     var nombre = line.split(',')[0];
      console.log(nombre);
} 
  }


}
