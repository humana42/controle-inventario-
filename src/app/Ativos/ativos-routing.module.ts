import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards';
import { BuscarAtivosComponent } from './buscar-ativos/buscar-ativos.component';
import { InserirAtivosComponent } from './inserir-ativos/inserir-ativos.component';


const routes: Routes = [
  {path:'inserir', component:InserirAtivosComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'buscar', component:BuscarAtivosComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]}
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