import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraContatosPageRoutingModule } from './cadastra-contatos-routing.module';

import { CadastraContatosPage } from './cadastra-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraContatosPageRoutingModule
  ],
  declarations: [CadastraContatosPage]
})
export class CadastraContatosPageModule {}
