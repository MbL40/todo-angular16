import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'delete-annotated',
  template: `
    <span class="msg-delete" matSnackBarLabel>
      ¿Estás seguro de que deseas eliminar esta tarea? Esta acción no se puede
      deshacer.</span
    >
    <span matSnackBarActions>
      <button
        mat-button
        matSnackBarAction
        (click)="snackBarRef.dismissWithAction()"
        style="color: red;"
      >
        Eliminar
      </button>
    </span>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      .msg-delete {
        color: #fff;
      }

      .mat-simple-snackbar-action {
        color: white !important;
      }
    `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class DeleteTodoAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
