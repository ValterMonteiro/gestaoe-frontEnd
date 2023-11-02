import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelProdutoPage } from './sel-produto.page';

const routes: Routes = [
  {
    path: '',
    component: SelProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelProdutoPageRoutingModule {}
