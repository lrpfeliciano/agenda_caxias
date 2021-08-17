import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraContatosPage } from './cadastra-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraContatosPageRoutingModule {}
