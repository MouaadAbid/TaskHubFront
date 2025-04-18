import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselModule,ButtonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
