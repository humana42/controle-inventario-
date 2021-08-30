import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirAtivosComponent } from './inserir-ativos/inserir-ativos.component';
import { BuscarAtivosComponent } from './buscar-ativos/buscar-ativos.component';
import { AtivosRoutingModule } from './ativos-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InserirAtivosComponent,
    BuscarAtivosComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AtivosModule { }
