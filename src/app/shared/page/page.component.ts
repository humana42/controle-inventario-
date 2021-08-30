import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {


  nomeUsuario: string
  siglaUsuario!: string

  constructor(private _route: Router) { 
    this.nomeUsuario = localStorage.getItem('nomeUsuario')?.toString() || ''
    this.iconUser()
  }

  ngOnInit(): void {
}

iconUser(){
  var L = this.nomeUsuario.lastIndexOf(" ")
  this.siglaUsuario= this.nomeUsuario[0]+this.nomeUsuario[L+1]
  this.siglaUsuario.toLocaleUpperCase()
}
home(){
  this._route.navigate(['home'])
}
cadastrarAtivo(){
  this._route.navigate(['ativos/inserir'])
}

buscarAtivo(){
  this._route.navigate(['ativos/buscar'])
}
logout(){
  this._route.navigate(['/login'])
  localStorage.clear()
}
}
