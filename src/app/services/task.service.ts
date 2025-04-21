import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://68059421ca467c15be695f21.mockapi.io/TaskHub/task';

  constructor(private http: HttpClient) {}

  // Get all tasks
  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  // Get a task by ID
  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/`);
  }

  // Create a new task
  createTask(taskData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, taskData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Edit an existing task
  editTask(id: number, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/`, taskData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a task
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/`);
  }
}