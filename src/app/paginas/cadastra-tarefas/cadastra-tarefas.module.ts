import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraTarefasPageRoutingModule } from './cadastra-tarefas-routing.module';

import { CadastraTarefasPage } from './cadastra-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraTarefasPageRoutingModule
  ],
  declarations: [CadastraTarefasPage]
})
export class CadastraTarefasPageModule {}
