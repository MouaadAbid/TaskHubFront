import { Component } from '@angular/core';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [InputTextModule,ButtonModule,TabViewModule, DropdownModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
