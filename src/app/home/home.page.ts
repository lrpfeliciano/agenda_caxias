import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) {}

  irParaContatos(){
    console.log("função irParaContatos acionada..."); 
    this.nav.navigateForward('contatos');  
  }

  irParaTarefas(){
    console.log("função irParaTarefas acionada..."); 
    this.nav.navigateForward('tarefas');  
  }

}
