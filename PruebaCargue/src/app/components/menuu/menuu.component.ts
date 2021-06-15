import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CargarHemofiliaComponent } from '../cargar-hemofilia/cargar-hemofilia.component';
interface compTab {
  nombre_pantalla: string;
  ruta:string
}

@Component({
  selector: 'app-menuu',
  templateUrl: './menuu.component.html',
  styleUrls: ['./menuu.component.css']
})

export class MenuuComponent implements OnInit {

  tabp:compTab;
  tabs = [];
  indice: number = -1;
  activeLink = this.tabs[0];

  constructor(private Router: Router) {
   
  }

  crearTab(nombre_pantalla: string, ruta:string) {
    let tab: compTab ={nombre_pantalla, ruta};
    this.tabs.push(tab);
    return this.tabs;

  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  ngOnInit(): void {
  }
}
 



