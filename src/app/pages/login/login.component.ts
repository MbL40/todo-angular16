import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store, select } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class LoginComponent implements OnInit {
 currentUser$: any;

 constructor(public auth: AuthService, private store: Store){
 }

  ngOnInit() {
    console.log(this.currentUser$);
  }

}
