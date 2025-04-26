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
    this.userService.getUsers().subscribe((response: any) => {

      console.log('user:',response);
      
      this.users = response.users.map((user: any) => ({
        name: `${user.firstName} ${user.firstName}`,
        email: user.email,
        phone: user.phone, // Reqres ne fournit pas le téléphone, tu peux mettre une valeur par défaut
        photo: user.image,
        address: user.address.city,
      }));
    });
  }
}
