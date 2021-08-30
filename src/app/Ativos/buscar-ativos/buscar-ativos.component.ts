import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ativo } from 'src/app/models/Ativo.model';
import { AtivosService } from '../ativos.service';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-buscar-ativos',
  templateUrl: './buscar-ativos.component.html',
  styleUrls: ['./buscar-ativos.component.css']
})
export class BuscarAtivosComponent implements OnInit {

  FormSearch: FormGroup 
  filtroValue = ''
  ListAtivos= new MatTableDataSource
  @ViewChild(MatPaginator) paginator: MatPaginator
  pagination = false
  descricaoColumns: String[] = ["TipoEquipamento","Marca", "Identificacao", "Departamento","Status", "Editar"]

  constructor(private _formbuilder: FormBuilder, private _dialog: MatDialog, private _ativosService: AtivosService) { 
    this.FormSearch = this._formbuilder.group({
      filtro: this._formbuilder.control('',[Validators.required]),
      filtro2: this._formbuilder.control('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.verificaFiltro()
  }


  public ListFiltro = [{id: 0, value:'Tipo de Equipamento'},
                      {id: 1, value:'Status'},
                      {id: 2, value:'Departamento'}]

  public ListTipoEquipamento = ['Notebook', 'Desktop','Impressora', 'Monitor', 'TV']

  public ListStatus = ['Estoque', 'Em Produção', 'Manutenção', 'Desativado']                 
                    
  public ListDepartamento = ['Administração', 'Almoxarifado', 'Compras', 'Contábil',
                                                'Diretoria', 'Financeiro', 'Fiscal', 'Portaria', 
                                                'RH', 'Sala de Reunião', 'TI']

  editarAtivo(d:Ativo){
    const dialogRef =  this._dialog.open(EditarComponent, {
      data: {data: d, ListTipoEquipamento: this.ListTipoEquipamento, ListStatus: this.ListStatus,  ListDepartamento: this.ListDepartamento }
    })
    dialogRef.afterClosed().subscribe(_ => {
      setTimeout(() => {
        this.search()
      })
    })
  }

  search(){
    let data = this._ativosService.getProdutos(this.FormSearch.controls.filtro.value, this.FormSearch.controls.filtro2.value)
    this.ListAtivos = new MatTableDataSource<any>(data)
    if(data.length > 4) this.pagination = true; else this.pagination = false
      setTimeout(() => this.ListAtivos.paginator = this.paginator)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ListAtivos.filter = filterValue.trim().toLowerCase();

  }

  verificaFiltro(){
    this.FormSearch?.get('filtro')?.valueChanges.subscribe(valor =>{
      this.FormSearch?.get('filtro2')?.setValue('')
      this.filtroValue = valor
    })
  }

  
}
