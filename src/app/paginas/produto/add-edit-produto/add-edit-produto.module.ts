import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditProdutoPageRoutingModule } from './add-edit-produto-routing.module';

import { AddEditProdutoPage } from './add-edit-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddEditProdutoPageRoutingModule
  ],
  declarations: [AddEditProdutoPage]
})
export class AddEditProdutoPageModule {}
