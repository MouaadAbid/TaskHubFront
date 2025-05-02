import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-project-edit',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './modal-project-edit.component.html',
  styleUrl: './modal-project-edit.component.css'
})
export class ModalProjectEditComponent {
  @Input() project: any;
  @Output() projectUpdated = new EventEmitter<void>();

  constructor(private projectService: ProjectService) {}

  saveProject() {
    if (this.project && this.project.id) {
      this.projectService.editProject(this.project.id, this.project).subscribe({
        next: () => {
          this.projectUpdated.emit();
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du projet', err);
        }
      });
    } else {
      console.warn('Aucun projet sélectionné pour la mise à jour.');
    }
  }
}

