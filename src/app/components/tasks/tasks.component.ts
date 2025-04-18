import { Component } from '@angular/core';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { NewTaskDialogComponent } from '../../app/components/tasks/new-task-dialog/new-task-dialog.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [InputTextModule,ButtonModule,TabViewModule, DropdownModule,DialogModule,NewTaskDialogComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  displayNewTaskDialog = false;

  openNewTaskDialog() {
    this.displayNewTaskDialog = true;
  }
}
