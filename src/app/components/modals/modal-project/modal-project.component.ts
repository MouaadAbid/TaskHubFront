import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [ButtonModule,InputTextModule],
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css'
})
export class ModalProjectComponent {

}
