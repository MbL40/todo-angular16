import { Component } from "@angular/core";
import { NavBarComponent } from "src/app/shared/components/navbar/navbar.component";
import { TodoComponent } from "src/app/shared/components/todo/todo.component";

@Component({
  selector: 'home',
  standalone: true,
  template: '<navbar></navbar> <todo-app></todo-app>',
  imports: [NavBarComponent, TodoComponent]
})

export class HomeComponent {

}
