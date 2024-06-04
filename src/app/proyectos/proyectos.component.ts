import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
     FormsModule,
     RouterModule
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  constructor(private router: Router) { }

  redirectToProjects(): void {
    this.router.navigate(['/projects']);
  }
}
