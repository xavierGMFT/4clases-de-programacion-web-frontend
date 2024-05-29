// src/app/services/backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:3000';  // URL del backend

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}`, { responseType: 'text' as 'json' });
  }
}
