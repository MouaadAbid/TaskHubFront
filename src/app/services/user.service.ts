import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  // Get a user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/`);
  }

  // Create a new user
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Edit an existing user
  editUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/`, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/`);
  }
}