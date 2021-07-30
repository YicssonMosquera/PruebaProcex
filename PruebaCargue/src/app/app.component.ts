import { LoginService } from './services/login/login.service'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { NgxUiLoaderService } from 'ngx-ui-loader';
interface tab { nombre_pantalla: string; contenido: string }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaCargue';
  tab: tab;
  inicio = { nombre_pantalla: 'Inicio', contenido: 'Hemofilia-cargar' };
  constructor(private rutaActiva: ActivatedRoute, private Router: Router, public loginService: LoginService,private ngxSpinnerService: NgxUiLoaderService,) { }

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
  logout() {
    this.ngxSpinnerService.start();
    this.loginService.logoutUser()
    this.ngxSpinnerService.stop();
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
  cambio(index: number) {
    this.Router.navigateByUrl(this.tabs[index].contenido);
  }

}
