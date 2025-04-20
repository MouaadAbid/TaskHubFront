import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'users', component: UsersComponent },

  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent }


];
