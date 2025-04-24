import { Component,OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../services/user.service';
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
  users: any[] = [];
  selectedUser: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.data; 
    });
  }}
