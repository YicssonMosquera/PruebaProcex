import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router'
import { CargarHemofiliaComponent } from '../cargar-hemofilia/cargar-hemofilia.component';
interface tab { nombre_pantalla: string; contenido: string }

@Component({
  selector: 'app-menuu',
  templateUrl: './menuu.component.html',
  styleUrls: ['./menuu.component.css']
})

export class MenuuComponent implements OnInit {
  tab: tab;
  indice: number = -1;
  inicio = { nombre_pantalla: 'Inicio', contenido: 'Hemofilia-cargar' };
  constructor(private rutaActiva: ActivatedRoute, private Router: Router) {}



  ngOnInit(): void {
    this.tab = {
      nombre_pantalla: this.rutaActiva.snapshot.params.nombre_pantalla,
      contenido: this.rutaActiva.snapshot.params.contenido,
    };
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.tab.nombre_pantalla = params.nombre_pantalla;
        this.tab.contenido = params.contenido;
      }
    );
  }

  
  tabs = [this.inicio];
  indexx: number;
  crearTab(nombre_pantalla: string, contenido: string) {
    this.indexx = this.tabs.length;
    this.tab = { nombre_pantalla: nombre_pantalla, contenido: contenido };
    this.tabs.push(this.tab);
    this.Router.navigateByUrl(this.tabs[this.tabs.length - 1].contenido);
    this.indexx = this.tabs.length;
    return this.tabs;
  }
  removeTab(index: number) {
    if (index == this.tabs.length - 1 && index != 0) {
      this.Router.navigateByUrl(this.tabs[index - 1].contenido);
      this.indexx = index - 1;
    } else {
      if (this.tabs.length > 0 && index < this.tabs.length - 1) {
        this.Router.navigateByUrl(this.tabs[index + 1].contenido);
        this.indexx = index;
      }
    }
    this.tabs.splice(index, 1);
  }

}
 



