import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/auth';

  constructor(private http: HttpClient) {}

  // Login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Signup
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/`, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Logout
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout/`, {}, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}