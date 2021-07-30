import { Component, OnInit } from '@angular/core';
import { MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { interval } from 'rxjs';
@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  today: number = Date.now();
  cargar

  activo: string = 'none';
  desplegar() {
    if (this.activo == 'none') {
      this.activo = 'block';
    } else {
      if (this.activo == 'block') {
        this.activo = 'none';
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.recargarHora();
  }

  recargarHora() {
    this.cargar = interval(9000);
    this.cargar.subscribe(() => {
      this.today = Date.now();
    })
  }

  ngOnDestroy() {
  
  }
  
}
