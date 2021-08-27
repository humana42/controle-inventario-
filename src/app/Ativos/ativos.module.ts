import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirAtivosComponent } from './inserir-ativos/inserir-ativos.component';
import { BuscarAtivosComponent } from './buscar-ativos/buscar-ativos.component';



@NgModule({
  declarations: [
    InserirAtivosComponent,
    BuscarAtivosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtivosModule { }
