import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TarefasService } from '../../servicos/tarefas.service';


@Component({
  selector: 'app-cadastra-tarefas',
  templateUrl: './cadastra-tarefas.page.html',
  styleUrls: ['./cadastra-tarefas.page.scss'],
})
export class CadastraTarefasPage implements OnInit {
  nome: string;
  descricao: string;

  constructor(private nav: NavController ,
              private servico: TarefasService) { }

  ngOnInit() {
  }

  irParaTarefas(){
    this.nav.navigateForward('tarefas');
  }
  cadastrar() {
    let tarefa = {};
    tarefa["nome"] = this.nome;
    tarefa["descricao"] = this.descricao;
    
    console.log(tarefa);
    this.servico.incluir(tarefa);
  }
}
