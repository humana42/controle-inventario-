import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'ativos', loadChildren: () => import('./Ativos/ativos.module').then(m => m.AtivosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
