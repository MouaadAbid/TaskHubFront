import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ModalUserComponent } from "../modals/modal-user/modal-user.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DialogModule, TableModule, ModalUserComponent, ButtonModule, InputTextModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  displayAddUserDialog = false;
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data.map((user: any) => ({
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        phone: 'N/A', // Reqres ne fournit pas le téléphone, tu peux mettre une valeur par défaut
        photo: user.avatar
      }));
    });
  }
}
