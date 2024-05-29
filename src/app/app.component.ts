import { Component, OnInit } from '@angular/core';
import { BackendService } from './Services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string | undefined;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getHello().subscribe(
      (response) => {
        this.message = response;
        console.log('Message from backend:', this.message);
      },
      (error) => {
        console.error('Error fetching message:', error);
      }
    );
  }
}
