import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {

  sName: string;
  sValor: number;
  sSaludo: string;

  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
    this.sValor = 22;
    this.sSaludo = 'Mayor a 20';
  }

}
