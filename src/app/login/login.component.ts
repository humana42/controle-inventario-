import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  constructor(private _formbuilder: FormBuilder) { 
    this.LoginForm = this._formbuilder.group({
      usuario: this._formbuilder.control('', []),
      senha: this._formbuilder.control('',[])
    })
  }

  ngOnInit(): void {
  }
  login(){

  }
}
