import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ModalProjectComponent } from '../modals/modal-project/modal-project.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [
    TableModule,
    PaginatorModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    ModalProjectComponent,
    ButtonModule,
    CommonModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class ProjectsComponent implements OnInit {
  displayProjectDialog = false;
  projects: any[] = [];
  filteredProjects: any[] = [];
  searchTerm: string = '';
  selectedProject: any = null;

  constructor(
    private projectService: ProjectService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  addProject(): void {
    this.selectedProject = null;
    this.displayProjectDialog = true;
  }

  editProject(project: any): void {
    this.selectedProject = { ...project };
    this.displayProjectDialog = true;
  }

  onProjectSaved(): void {
    this.displayProjectDialog = false;
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data: any[]) => {
        this.projects = data;
        this.filteredProjects = data;
      },
      error: (error) => {
        console.error('Erreur récupération projets:', error);
      }
    });
  }

  filterProjects(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.created_by.toLowerCase().includes(term)
    );
  }

  confirmDeleteProject(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this project?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.projectService.deleteProject(id).subscribe(() => {
          this.projects = this.projects.filter(p => p.id !== id);
          this.filteredProjects = this.filteredProjects.filter(p => p.id !== id);
          this.messageService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: 'Project deleted successfully'
          });
        });
      }
    });
  }
}
