import { Injectable } from '@angular/core';
import { AngularFirestore } 
    from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private firestore: AngularFirestore) { }

  incluir(tarefa:any) {
    this.firestore.collection('tarefas').add(tarefa);
  }
}
