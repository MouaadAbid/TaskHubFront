import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms'; // Import FormsModule is imported

@Component({
  selector: 'app-modal-task',
  standalone: true,
  imports: [
    InputTextModule,
    TextareaModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    FormsModule // Add FormsModule heres included
  ],
  templateUrl: './modal-task.component.html',
  styleUrl: './modal-task.component.css'
})
export class ModalTaskComponent {
  @Output() taskCreated = new EventEmitter<any>();

  task = {
    title: '',
    description: '',
    priority: '',
    dueDate: null
  };

  priorities = [
    { label: 'Low', value: 'Low' },
    { label: 'Medium', value: 'Medium' },
    { label: 'High', value: 'High' }
  ]; // Correctly formatted options for p-dropdown

  saveTask() {
    console.log('Task to save:', this.task);
    this.taskCreated.emit(this.task);
  }
}
