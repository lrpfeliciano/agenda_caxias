import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraTarefasPage } from './cadastra-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraTarefasPageRoutingModule {}
