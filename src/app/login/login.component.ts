import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  constructor(private _formbuilder: FormBuilder, private _loginService: LoginService) { 
    this.LoginForm = this._formbuilder.group({
      usuario: this._formbuilder.control('', [Validators.required]),
      senha: this._formbuilder.control('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  
  login(){
    this._loginService.getLogin(this.LoginForm.controls.usuario.value, this.LoginForm.controls.senha.value)
  }
}
