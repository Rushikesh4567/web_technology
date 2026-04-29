import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-users',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api-users.html',
  styleUrl: './api-users.css'
})
export class ApiUsers implements OnInit {

  users: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data;
        this.loading = false;
      });
  }
}