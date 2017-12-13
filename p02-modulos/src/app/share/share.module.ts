import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CabeceraComponent,
    PieComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent
  ]  // Exportamos el componente para poder ser utilizado fuera del modulo que lo contiene
})
export class ShareModule { }
