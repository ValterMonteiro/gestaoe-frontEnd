import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelProdutoPageRoutingModule } from './sel-produto-routing.module';

import { SelProdutoPage } from './sel-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelProdutoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SelProdutoPage]
})
export class SelProdutoPageModule {}
