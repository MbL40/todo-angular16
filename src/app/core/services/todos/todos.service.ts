import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})

export class TodosService {
  fireStoreCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore){
    this.fireStoreCollection = firestore.collection('todos');
  }

  addTodo(title: string){
    this.fireStoreCollection.add({
      task: title,
      isDone: false
    })
  }

  updateStatusTodo(id: string, newStatus: boolean){
    console.log(id, newStatus);
    this.fireStoreCollection.doc(id).update({isDone: newStatus})
  }

  deleteTodo(id: string){
    this.fireStoreCollection.doc(id).delete();
  }

}

