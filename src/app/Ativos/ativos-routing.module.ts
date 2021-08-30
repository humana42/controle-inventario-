import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAtivosComponent } from './buscar-ativos/buscar-ativos.component';
import { InserirAtivosComponent } from './inserir-ativos/inserir-ativos.component';


const routes: Routes = [
  {path:'inserir', component:InserirAtivosComponent},
  {path: 'buscar', component:BuscarAtivosComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AtivosRoutingModule { }