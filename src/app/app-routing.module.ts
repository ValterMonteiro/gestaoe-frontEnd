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
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pagina/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cadastro-de-produto',
    loadChildren: () => import('./pagina/cadastro-de-produto/cadastro-de-produto.module').then( m => m.CadastroDeProdutoPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pagina/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
