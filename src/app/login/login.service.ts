import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private List =  [
                    {usuario: 'jsilva', senha:'1234', nomeUsuario: 'João da Silva'},
                    {usuario: 'scamargo',senha:'1234', nomeUsuario: 'Simone Camargo'},
                    {usuario: 'ggomes', senha:'1234', nomeUsuario: 'Gabriel Gomes'},
                    {usuario: 'kmacedo', senha:'1234', nomeUsuario: 'Kelly Macedo'}
                  ]
    
    
  constructor(private _snackBar : MatSnackBar, private route:Router) { }

  getLogin(usuario:string, senha:string) {
    var log =
    this.List.map(user => {
      if(user.usuario == usuario && user.senha == senha){
        var exp = Date.now()
        localStorage.setItem('usuario', user.usuario)
        localStorage.setItem('nomeUsuario', user.nomeUsuario)
        localStorage.setItem('exp', exp.toString())
        
        return true
      } else return false
    })
      var m =log.some(x => x== true)
      if(m){
        this.route.navigateByUrl('/home');
      }else{
        this._snackBar.open("Usuário ou Senha inválidos", "ok", {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        })
      }
  }
}
