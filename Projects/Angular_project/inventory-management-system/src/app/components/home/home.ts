import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  appName = 'Inventory Management System';
  imageUrl = 'https://cdn-icons-png.flaticon.com/512/679/679922.png';
}