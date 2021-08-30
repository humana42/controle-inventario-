import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    PageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageComponent,
  ]
})
export class SharedModule { }