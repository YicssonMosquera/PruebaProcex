import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginService } from '../../services/login/login.service'



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginservice: LoginService, private ngxSpinnerService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    
  }
  eliminar() {
    var eliminados = document.querySelectorAll('[idTab="home1a"]');
    console.log(eliminados)
    for (var i = 0; i < eliminados.length; i++) {
      eliminados[i].remove();
    }
  }
  crearTab(li: HTMLLIElement) {
    var indexTab = 2;
    console.log("si esta entrando");
    // asignacion id
    indexTab = indexTab + 1;
    let idLi = li.getAttribute("name2");
    idLi = idLi + indexTab;
    var nameTab = li.getAttribute("name");
    console.log(idLi);
    var ul = document.getElementById("myTab"); //creacion del ul
    //  var ul=document.createElement("ul")
    //     ul.setAttribute("class","nav nav-tabs")
    //     ul.setAttribute("id","myTab")
    //     ul.setAttribute("role","tablist")
    //creacion del li donde va el boton a(tab) 
    var li = document.createElement("li");
    li.setAttribute("class", "nav-item");
    li.setAttribute("role", "presentation");
    li.setAttribute("idTab", idLi + "a")
    ul.appendChild(li);
    //creacion del boton(tab)  
    var button = document.createElement("a");
    button.setAttribute("class", "nav-link btn-custom");
    button.setAttribute("id", idLi + "-tab");
    button.setAttribute("data-bs-toggle", "tab");
    button.setAttribute("data-bs-target", "#" + idLi);
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", idLi);
    button.setAttribute("aria-selected", "true");
    li.appendChild(button);
    button.innerHTML = nameTab;
    //eliminar boton  
    var close = document.createElement("span");
    close.setAttribute("idTab", idLi + "a")
    close.setAttribute("class", "close");
    close.innerHTML = "x";
    button.appendChild(close);
    close.addEventListener("click", function () {
      var idTAb = this.getAttribute("idTab");
      var eliminados = document.querySelectorAll("[idTab='" + idTAb + "']");
      console.log(eliminados)
      for (var i = 0; i < eliminados.length; i++) {
        eliminados[i].remove();
      }
    });
    //creacion del contenido de la pestaña(tab)  
    var divP = document.getElementById("myTabContent");
    // var divP = document.createElement("div");
    // divP.setAttribute("class","tab-content");
    // divP.setAttribute("id","myTabContent");
    var div = document.createElement("div");
    div.setAttribute("idTab", idLi + "a")
    div.setAttribute("class", "tab-pane fade");
    div.setAttribute("id", idLi);
    div.setAttribute("role", "tabpanel");
    div.setAttribute("aria-labelledby", idLi + "-tab");
    div.innerHTML = "aaaaaaaaaaaaa";
    divP.appendChild(div);
    button.click();
  }

  logout() {
    this.ngxSpinnerService.start();
    this.loginservice.logoutUser()
    this.ngxSpinnerService.stop();
  }
}
  //contador para asignacion id




//metodo que crea los tab


