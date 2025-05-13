import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, DropdownModule, CommonModule],
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css'
})
export class ModalProjectComponent implements OnInit, OnChanges {
  @Input() projectToEdit: any = null;
  @Output() projectSaved = new EventEmitter<void>();

  projectData = {
    id: 0,
    name: '',
    description: '',
    created_by: ''
  };

  users: any[] = [];

  constructor(
    private userService: UserService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['projectToEdit']) {
      if (this.projectToEdit) {
        this.projectData = { ...this.projectToEdit };
      } else {
        this.projectData = {
          id: 0,
          name: '',
          description: '',
          created_by: ''
        };
      }
    }
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.users.map((user: any) => ({
        name: `${user.firstName} ${user.lastName}`
      }));
    });
  }

  saveProject(): void {
    if (this.projectToEdit) {
      // Édition
      this.projectService.editProject(this.projectData.id, this.projectData).subscribe({
        next: () => {
          this.projectSaved.emit();
        },
        error: (err) => {
          console.error('Erreur mise à jour projet', err);
        }
      });
    } else {
      // Création
      this.projectService.createProject(this.projectData).subscribe({
        next: () => {
          this.projectSaved.emit();
        },
        error: (err) => {
          console.error('Erreur création projet', err);
        }
      });
    }
  }
}
