import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TasksComponent } from './components/tasks/tasks.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, HeaderComponent, FooterComponent,MainComponent,HomeComponent,AboutComponent,ContactComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskHub';
}
