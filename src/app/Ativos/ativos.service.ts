import { isNgContent } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Ativo } from '../models/Ativo.model';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  public ListAtivo = [
    {tipoEquipamento: 'Desktop', identificacao:'1', marca: 'Dell', departamento: 'Administração', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'2', marca: 'Dell', departamento: 'Administração', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'3', marca: 'HP', departamento: 'Contábil', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'4', marca: 'HP', departamento: 'Financeiro', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'5', marca: 'Dell', departamento: 'Fiscal', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'6', marca: 'HP', departamento: 'Portaria', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'7', marca: 'HP', departamento: 'RH', status: 'Em Produção'},
    {tipoEquipamento: 'Desktop', identificacao:'8', marca: 'HP', departamento: 'Portaria', status: 'Em Produção'},
    {tipoEquipamento: 'Notebook', identificacao:'9', marca: 'Dell', departamento: 'Diretoria', status: 'Em Produção'},
    {tipoEquipamento: 'Notebook', identificacao:'10', marca: 'Acer', departamento: 'Diretoria', status: 'Em Produção'},
    {tipoEquipamento: 'Notebook', identificacao:'11', marca: 'Dell', departamento: 'TI', status: 'Em Produção'},
    {tipoEquipamento: 'Notebook', identificacao:'12', marca: 'Acer', departamento: 'TI', status: 'EStoque'},
    {tipoEquipamento: 'Desktop', identificacao:'13', marca: 'Dell', departamento: 'TI', status: 'Mantenção'},
    {tipoEquipamento: 'Desktop', identificacao:'14', marca: 'Dell', departamento: 'Administração', status: 'Em Produção'},
    {tipoEquipamento: 'Impressora', identificacao:'15', marca: 'HP', departamento: 'Administração', status: 'Em Produção'},
    {tipoEquipamento: 'Impressora', identificacao:'16', marca: 'HP', departamento: 'RH', status: 'Em Produção'},
    {tipoEquipamento: 'Impressora', identificacao:'17', marca: 'HP', departamento: 'Diretoria', status: 'Em Produção'},
    {tipoEquipamento: 'Impressora', identificacao:'18', marca: 'HP', departamento: 'TI', status: 'Manutenção'},
    {tipoEquipamento: 'TV', identificacao:'19', marca: 'Sansung', departamento: 'Diretoria', status: 'Em Produção'},
    {tipoEquipamento: 'TV', identificacao:'20', marca: 'Sansung', departamento: 'TI', status: 'Em Produção'},
    {tipoEquipamento: 'TV', identificacao:'21', marca: 'LG', departamento: 'Portaria', status: 'Em Produção'},
    
    
  ]
  constructor() { }

  getProdutos(filtro:string, filtro2:string){
    let dataFilter = this.ListAtivo.filter(item => {
      switch(filtro){
        case 'Tipo de Equipamento':
         return item.tipoEquipamento == filtro2

        case 'Departamento':
         return item.departamento == filtro2

        case 'Status':
         return item.status == filtro2

         default:
           return ''
      }
    })
    return dataFilter
  }

  postEditAtivo(id: string, itemData:Ativo){
    this.ListAtivo.map( (item, index) => {
      if(item.identificacao == id){
        this.ListAtivo.splice(index, 1)
        this.ListAtivo.push(itemData)
      }
    })
  }

  getId(){
    var res = Math.max.apply(Math, this.ListAtivo.map(i  => { return i.identificacao as unknown as number; }))
    return res + 1
  }

  postAddAtivo(itemData: Ativo){
    this.ListAtivo.push(itemData)
  }
}
