import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditProdutoPage } from './add-edit-produto.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditProdutoPageRoutingModule {}
