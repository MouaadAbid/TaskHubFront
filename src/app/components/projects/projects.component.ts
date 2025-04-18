import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TableModule,
    PaginatorModule, InputTextModule,FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { name: 'TaskHub Platform', description: 'Task and project manager', createdBy: 'Yasmine' },
    { name: 'E-learning Portal', description: 'Online education system', createdBy: 'Samir' },
    { name: 'Mobile Banking App', description: 'Banking on the go', createdBy: 'Lina' },
  ];
}
