import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ModalProjectComponent } from '../modals/modal-project/modal-project.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TableModule,
    PaginatorModule, InputTextModule,FormsModule,DialogModule,ModalProjectComponent,ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  displayAddProjectDialog: boolean = false;

  projects = [
    { name: 'TaskHub Platform', description: 'Task and project manager', createdBy: 'Yasmine' },
    { name: 'E-learning Portal', description: 'Online education system', createdBy: 'Samir' },
    { name: 'Mobile Banking App', description: 'Banking on the go', createdBy: 'Lina' },
  ];
}
