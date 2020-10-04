import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task Manager Tool';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAppUsers();
  }

  getAppUsers(): void {
    this.http.get('https://localhost:5001/api/appusers').subscribe(response => {
      console.log(response);
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
