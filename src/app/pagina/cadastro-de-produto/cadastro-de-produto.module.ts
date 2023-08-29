import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDeProdutoPageRoutingModule } from './cadastro-de-produto-routing.module';

import { CadastroDeProdutoPage } from './cadastro-de-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDeProdutoPageRoutingModule
  ],
  declarations: [CadastroDeProdutoPage]
})
export class CadastroDeProdutoPageModule {}
