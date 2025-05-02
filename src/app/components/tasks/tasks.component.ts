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
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [InputTextModule,ButtonModule,TabViewModule, DropdownModule,DialogModule,ModalTaskComponent,CommonModule,TabPanel,TableModule],
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
        this.tasks = response.map((task: any) => ({
          title: task.title,
          description: task.description,
          due_date: task.due_date,
          status: task.status || 'Pending',
          priority: task.priority,
          project: task.project || 'Unassigned',
          assigned_to: task.assigned_to || 'Unassigned'
        })); // Map response to match the table structure
        console.log('Tasks fetched successfully:', this.tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  displayNewTaskDialog = false;
  tasks: any[] = [];
  openTaskModal() {
    this.displayNewTaskDialog = true;
  }

  onTaskCreated(newTask: any) {
    this.displayNewTaskDialog = false;
    this.taskService.createTask(newTask).subscribe(
      (createdTask: any) => {
        console.log('Task created successfully:', createdTask);
        this.tasks.push(createdTask); // Add the new task to the local list
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
  }
}
