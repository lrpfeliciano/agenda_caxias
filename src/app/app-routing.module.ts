import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contatos',
    loadChildren: () => import('./paginas/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./paginas/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'cadastra-tarefas',
    loadChildren: () => import('./paginas/cadastra-tarefas/cadastra-tarefas.module').then( m => m.CadastraTarefasPageModule)
  },
  {
    path: 'cadastra-contatos',
    loadChildren: () => import('./paginas/cadastra-contatos/cadastra-contatos.module').then( m => m.CadastraContatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
