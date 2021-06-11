import { Component, OnInit } from '@angular/core';
import { MatTooltipDefaultOptions } from '@angular/material/tooltip';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
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
    
  }
  
}
