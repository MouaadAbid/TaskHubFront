import { Component,OnInit,EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [ButtonModule,InputTextModule,FormsModule,DropdownModule],
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css'
})
export class ModalProjectComponent implements OnInit {
  @Output() projectCreated = new EventEmitter<void>();
  projectData = {
    name: '',
    description: '',
    created_by: '',
    id : 0,
  };

  users: any[] = [];
  selectedUser: any;

  constructor(private userService: UserService,
              private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.users.map((user: any) => ({
        name: `${user.firstName} ${user.lastName}`,
        
      }));  
      
      console.log('users:',this.users);
      
    });
  }

  saveProject() {
    this.projectService.createProject(this.projectData).subscribe(
      () => {
        console.log('Project created successfully');
        this.projectCreated.emit(); // Notify parent component
      },
      (error) => {
        console.error('Error creating project:', error);
      }
    );
  }




}
