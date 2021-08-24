import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastra-contatos',
  templateUrl: './cadastra-contatos.page.html',
  styleUrls: ['./cadastra-contatos.page.scss'],
})
export class CadastraContatosPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  irParaContatos(){
    this.nav.navigateForward('contatos');
  }
}
