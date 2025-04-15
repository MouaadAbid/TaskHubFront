import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
interface Testimonial {
  text: string;
  name: string;
  position: string;
  avatar: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  testimonials: Testimonial[] = [
    {
      text: "TaskHub has completely transformed how our team collaborates. We've seen a 40% increase in productivity since we started using it.",
      name: "Sarah Johnson",
      position: "Project Manager at TechCorp",
      avatar: "assets/user1.jpeg"
    },
    {
      text: "As a freelancer, I needed a simple but powerful task manager. TaskHub gives me everything I need without unnecessary complexity.",
      name: "Michael Chen",
      position: "Freelance Developer",
      avatar: "assets/user2.jpg"
    },
    {
      text: "The analytics features helped us identify workflow bottlenecks we didn't even know existed. Highly recommended for any team!",
      name: "Emily Rodriguez",
      position: "CTO at StartupX",
      avatar: "assets/user3.jpg"
    }
  ];
}
