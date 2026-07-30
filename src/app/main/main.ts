import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  links = [
    {route: '/home', title: 'Home', icon: 'home'},
    {route: '/statistik', title: 'Statistik', icon: 'analytics'},
    {route: '/login', title: 'Abmelden', icon: 'logout'},
  ]
}
