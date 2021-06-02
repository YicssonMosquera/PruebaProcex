import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css']
})
export class CargarHemofiliaComponent implements OnInit {
  hemofilia
  resultado
  
  rows = 10;
  page = 0;
  totalRecords: 0;

  file: File;
  nombrearchivo: string;
  pesoarchivo: string;
  cargahemofilia: any
  UserFullName: string;
  private User
  private perfil
  constructor(private hemofiliaservice: HemofiliaService, private loginservice: LoginService) {
    this.User = this.loginservice.getCurrentUser();
    this.perfil = this.loginservice.getCurrentperfil();
    if (this.User) {
    }
  }

  ngOnInit(): void {
    this.ConsultarCargue();
  }

  ConsultarCargue() {
    this.hemofiliaservice.consultarCargue(this.page, this.rows).subscribe(res => {
      this.resultado = res;
      this.hemofilia = this.resultado.hemofilia;
      this.totalRecords =  this.resultado.numero_registro;
    })
  }

  paginador(event){
    console.log(event);
    this.rows = event.rows;
    this.page = event.page;
    this.ConsultarCargue();
  }



  Seleccionarzip(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    this.pesoarchivo = event.target.files[0].size
    console.log(this.pesoarchivo)
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.descomprimirzip(this.file)
    }
    reader.readAsText(this.file)
  }
  descomprimirzip(prueba: any) {
    const jszip = new JSZip();
    jszip.loadAsync(prueba).then((zip) => {
      Object.keys(zip.files).forEach((filename) => {
        zip.files[filename].async('string').then((fileData) => {
          this.leertxt(fileData)
        })
      })
    });
  }

  leertxt(prueba: any) {
    this.cargahemofilia = prueba;
    for (const line of prueba.split(/[\r\n]+/)) {
      var nombre = line.split(',')[0];
    }
  }


  cargarhemofilia() {
    this.hemofiliaservice.cargamasivahemofilia(this.file, this.User, this.perfil).subscribe(res => {
      console.log(res)
    })
  }

}
