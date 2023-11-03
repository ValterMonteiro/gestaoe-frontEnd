import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    /* redirectTo: 'folder/Inbox', */
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./paginas/usuario/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'sel-produto',
    loadChildren: () => import('./paginas/produto/sel-produto/sel-produto.module').then( m => m.SelProdutoPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./paginas/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'add-edit-produto/:id',
    loadChildren: () => import('./paginas/produto/add-edit-produto/add-edit-produto.module').then( m => m.AddEditProdutoPageModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./paginas/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
