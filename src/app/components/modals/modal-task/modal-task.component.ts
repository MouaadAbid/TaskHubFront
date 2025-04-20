import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-modal-task',
  standalone: true,
  imports: [InputTextModule,
    TextareaModule,
    DropdownModule,
    CalendarModule,
    ButtonModule],
  templateUrl: './modal-task.component.html',
  styleUrl: './modal-task.component.css'
})
export class ModalTaskComponent {
  displayNewTaskDialog: any;
}
