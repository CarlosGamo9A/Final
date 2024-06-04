// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PdfGeneratorComponent } from './pdf/pdf-generator/pdf-generator.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProjectsComponent } from './projects/projects.component';

export const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'pdf', component: PdfGeneratorComponent },
  { path: '**', redirectTo: 'login' }
];
