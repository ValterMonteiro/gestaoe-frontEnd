import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDeProdutoPage } from './cadastro-de-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDeProdutoPageRoutingModule {}
