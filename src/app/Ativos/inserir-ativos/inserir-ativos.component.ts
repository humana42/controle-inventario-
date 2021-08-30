import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtivosService } from '../ativos.service';

@Component({
  selector: 'app-inserir-ativos',
  templateUrl: './inserir-ativos.component.html',
  styleUrls: ['./inserir-ativos.component.css']
})
export class InserirAtivosComponent implements OnInit {
  panelOpenState: boolean = false
  FormAtivos: FormGroup
  isCPU: boolean = false
  isActive: boolean = false


  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private _formBuilder: FormBuilder, private _snackbar: MatSnackBar, private _ativoService: AtivosService) {
    var id = this._ativoService.getId()
    this.FormAtivos = this._formBuilder.group({
      tipoEquipamento: this._formBuilder.control('', [Validators.required]),
      marca: this._formBuilder.control('', [Validators.required]),
      identificacao: this._formBuilder.control(id, [Validators.required]),
      departamento: this._formBuilder.control('', [Validators.required]),
      status: this._formBuilder.control('', [Validators.required]),
    })

  }

  public ListTipoEquipamento = ['Notebook', 'Desktop', 'Impressora', 'Monitor', 'TV']

  public ListStatus = ['Estoque', 'Em Produção', 'Manutenção', 'Desativado']

  public ListDepartamento = ['Administração', 'Almoxarifado', 'Compras', 'Contábil',
                            'Diretoria', 'Financeiro', 'Fiscal', 'Portaria',
                            'RH', 'Sala de Reunião', 'TI']

  ngOnInit(): void {

  }


  SubmitAtivo() {
    if (this.FormAtivos.valid) {
      this._ativoService.postAddAtivo(this.FormAtivos.value)
      this.formGroupDirective.resetForm();
      var id = this._ativoService.getId()
      this.FormAtivos.controls.identificacao.setValue(id)
    } else {

      this._snackbar.open("Preencha todos os campos necessários ", "ok", {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      })
    }
  }
}
