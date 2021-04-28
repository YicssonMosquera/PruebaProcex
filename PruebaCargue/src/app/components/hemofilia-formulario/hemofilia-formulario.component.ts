import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-hemofilia-formulario',
  templateUrl: './hemofilia-formulario.component.html',
  styleUrls: ['./hemofilia-formulario.component.css']
})
export class HemofiliaFormularioComponent implements OnInit {

  model: NgbDateStruct
  horas:any
  minutos:any

  constructor() { }

  ngOnInit(): void {
  }

}
