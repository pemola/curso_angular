import { Component, OnInit } from '@angular/core';

// metadatos
@Component({
  selector: 'app-cabecera', // como llamar al componente
  templateUrl: './cabecera.component.html', // apunta a la vista
  styleUrls: ['./cabecera.component.css'] // apunta al fichero de estilos
})
export class CabeceraComponent implements OnInit {

  public sTitulo: string;
  constructor() {
    this.sTitulo = 'Modulos en Angular';
   } // en el constructor no hay acceso a todo el DOM
    // se utiliza unicamente para inyectar dependencias

  // Metodo obligatorio, aqui se puede acceder al DOM

  ngOnInit() {
  }

}
