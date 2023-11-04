import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { TodosService } from 'src/app/core/services/todos/todos.service';
import { NgFor } from '@angular/common';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import {
  MatSnackBar,
  MatSnackBarRef,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { DeleteTodoAnnotatedComponent } from '../delete-annotated/delete-annotated.component';

@Component({
  selector: 'todo-app',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    NgFor,
  ],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todoToAdd: string = '';
  todosList: any[] = [];

  constructor(
    private todosService: TodosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.todosService.fireStoreCollection
      .valueChanges({ idField: 'id' })
      .subscribe((item: any) => {
        this.todosList = item.sort((a: any, b: any) => {
          return a.isDone < b.isDone;
        });
      });
  }

  addTodos() {
    if (!this.todoToAdd) {
      this._snackBar.open('No se puede agregar una tarea vacía.');
      return;
    }
    this.todosService.addTodo(this.todoToAdd);
    this.todoToAdd = '';
  }

  updateTodosStatus(checktask: MatCheckbox) {
    this._snackBar.open('!Tarea finalizada con éxito!', 'Cerrar', {
      panelClass: ['update-todo'],
      duration: 2000
    })
    this.todosService.updateStatusTodo(checktask.id, checktask.checked);
  }

  deleteTodo(id: string) {
    this._snackBar.openFromComponent(DeleteTodoAnnotatedComponent,).afterDismissed().subscribe(() => {
      this.todosService.deleteTodo(id);
    });
  }

}

