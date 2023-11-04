import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class NavBarComponent {
  constructor(private auth: AuthService, private router: Router) {}

  actualUser = JSON.parse(localStorage.getItem('user')!);

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
