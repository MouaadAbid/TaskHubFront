import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-new-task-dialog',
  standalone: true,
  imports: [InputTextModule,
    TextareaModule,
    DropdownModule,
    CalendarModule,
    ButtonModule],
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.css'
})
export class NewTaskDialogComponent {
displayNewTaskDialog: any;

}
