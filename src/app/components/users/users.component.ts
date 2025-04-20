import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ModalUserComponent } from "../modals/modal-user/modal-user.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DialogModule, TableModule, ModalUserComponent, ButtonModule,InputTextModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+33 6 12 34 56 78',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+33 6 87 65 43 21',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Ali Bensalem',
      email: 'ali.bensalem@example.com',
      phone: '+213 6 78 90 12 34',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  displayAddUserDialog = false;
}