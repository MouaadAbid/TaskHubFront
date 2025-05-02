import { Injectable,inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiUrl = 'https://68059421ca467c15be695f21.mockapi.io/TaskHub/project'; 
 

  constructor(private http: HttpClient) { }

  //  GET  All projects
  getProjects(): Observable<any> {
  return this.http.get(this.apiUrl); // Ensure this matches the backend API
}

getProjectById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`); // Fixed endpoint
}

createProject(projectData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}`, projectData, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

editProject(id: number, projectData: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, projectData, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

deleteProject(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

 
}