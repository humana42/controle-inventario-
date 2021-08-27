import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    
    
  constructor(private _snackbar : MatSnackBar, private route:Router) { }

  getLogin(usuario:string, senha:string){
    this.List.map(user => {
      if(user.usuario == usuario || user.senha == senha){
        
        localStorage.setItem('usuario', user.usuario)
        localStorage.setItem('nomeUsuario', user.nomeUsuario)

        this.route.navigateByUrl('/home');

      }else{
        this._snackbar.open('Senha ou usuário inválido', "ok", {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        })
      }
    })
  }
}
