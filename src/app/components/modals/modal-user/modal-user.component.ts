import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-modal-user',
  standalone: true,
  imports: [FormsModule,FormsModule,ButtonModule,InputTextModule],
  templateUrl: './modal-user.component.html',
  styleUrl: './modal-user.component.css'
})
export class ModalUserComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    photo: ''
  };

  saveUser() {
    console.log('User to save:', this.user);
    // Pour l'instant, on affiche juste les infos
  }
}


