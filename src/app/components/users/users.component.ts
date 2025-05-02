import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ModalUserComponent } from "../modals/modal-user/modal-user.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../services/user.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MultiSelectModule } from 'primeng/multiselect';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DialogModule, TableModule, ModalUserComponent, ButtonModule, InputTextModule,AvatarModule, AvatarGroupModule,MultiSelectModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  displayAddUserDialog = false;
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refreshUsers();
  }

  onUserCreated(newUser: any) {
    this.displayAddUserDialog = false;
    this.userService.createUser(newUser).subscribe(
      (createdUser: any) => {
        console.log('User created successfully:', createdUser);
        this.users.push({
          name: `${createdUser.firstName} ${createdUser.lastName}`,
          email: createdUser.email,
          phone: createdUser.phone || 'N/A',
          photo: createdUser.image,
          address: createdUser.address?.city || 'N/A',
        }); // Add the new user to the local list
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  private refreshUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.users.map((user: any) => ({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone || 'N/A', // Default value if phone is missing
        photo: user.image,
        address: user.address?.city || 'N/A', // Default value if address is missing
      }));
    });
  }
}
