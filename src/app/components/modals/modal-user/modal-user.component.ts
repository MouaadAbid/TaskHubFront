import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-modal-user',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './modal-user.component.html',
  styleUrl: './modal-user.component.css'
})
export class ModalUserComponent {
  @Output() userCreated = new EventEmitter<any>(); // Emit user data

  user = {
    name: '',
    email: '',
    phone: '',
    photo: ''
  };

  saveUser() {
    console.log('User to save:', this.user);
    this.userCreated.emit(this.user); // Emit the user object
  }
}


