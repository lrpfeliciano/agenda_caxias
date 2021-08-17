import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  constructor(private nav: NavController) {}

  ngOnInit() {
  }

  irParaForm(){
    console.log("função irParaContatos acionada..."); 
    this.nav.navigateForward('cadastra-tarefas');  
  }



}
