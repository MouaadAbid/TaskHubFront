import { Component } from '@angular/core';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabPanel, TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ModalTaskComponent } from '../modals/modal-task/modal-task.component'; 

import {TaskService  } from '../../services/task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [InputTextModule,ButtonModule,TabViewModule, DropdownModule,DialogModule,ModalTaskComponent,CommonModule,TabPanel],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  constructor(    private backendService: BackendService,
    private taskService: TaskService
  ) { }
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.taskService.getTasks().subscribe(
      (response: any) => {
        this.tasks = response;
        console.log('Tasks fetched successfully:', this.tasks);
        
      }
    );
  }
  displayNewTaskDialog = false;
  tasks: any[] = [];
  openTaskModal() {
    this.displayNewTaskDialog = true;
  }
}
