import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { Hemofilia } from '../../models/cargahemofilia'
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'
import { LoginService } from '../../services/login/login.service'
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css']
})
export class CargarHemofiliaComponent implements OnInit {
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
    if (!isNullOrUndefined(this.User)) {
    }
  }

  ngOnInit(): void {

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
    this.hemofiliaservice.cargamasivahemofilia(this.file,this.User,this.perfil).subscribe(res => {
      console.log(res)
    })
  }

}
