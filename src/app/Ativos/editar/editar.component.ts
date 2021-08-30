import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ativo } from 'src/app/models/Ativo.model';
import { AtivosService } from '../ativos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  FormAtivos: FormGroup
  isActive: boolean = false
  constructor(private _formBuilder: FormBuilder, private _snackbar: MatSnackBar,  private _ativosService: AtivosService, private _dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      data: Ativo, 
      ListTipoEquipamento: String[], 
      ListStatus: String[], 
      ListDepartamento: String[]
    }) 
  {
    this.FormAtivos = this._formBuilder.group({
      tipoEquipamento: this._formBuilder.control(data.data.tipoEquipamento, []),
      marca: this._formBuilder.control(data.data.marca, []),
      identificacao: this._formBuilder.control(data.data.identificacao, []),
      departamento: this._formBuilder.control(data.data.departamento, [Validators.required]),
      status: this._formBuilder.control(data.data.status, [Validators.required]),
    })
   }

  ngOnInit(): void {
  }

  SubmitAtivo(){
    if(this.FormAtivos.valid){
      this._ativosService.postEditAtivo(this.FormAtivos.controls.identificacao.value, this.FormAtivos.value)
    
      this._dialogRef.close()
    }else {
      Object.keys(this.FormAtivos.controls).forEach(name => {
        this.FormAtivos.controls[name].markAllAsTouched()
      })
      this._snackbar.open("Preencha todos os campos necessários ", "ok", {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      })
    }
  }

}
