import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ModalProjectComponent } from '../modals/modal-project/modal-project.component';
import { ButtonModule } from 'primeng/button';
import { ProjectService } from '../../services/project.service';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TableModule,
    PaginatorModule, InputTextModule,FormsModule,DialogModule,ModalProjectComponent,ButtonModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  displayAddProjectDialog: boolean = false;
  projects: any[] = [];
  constructor(    private backendService: BackendService,
      private projectService: ProjectService
    ) { }
    ngOnInit() {
      this.getProjects();
    }
    
    getProjects() { 
      this.projectService.getProjects().subscribe(
        (response: any) => {
          this.projects = response;
          console.log('Projects fetched successfully:', this.projects);
          
        }
      );
    }

  
}
