import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { ExcelService } from '../../excel/excel-reader/excel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  signature: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:true,
  imports: [
    CommonModule,
    FormsModule, // Importa el módulo FormsModule aquí
    RouterModule
  ]
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  signatureFile: File | null = null;

  constructor(private authService: AuthService) {}

  onSignatureFileSelected(event: any): void {
    this.signatureFile = event.target.files[0];
  }

  register(): void {
    const newUser: User = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      role: this.role,
      signature: this.signatureFile ? this.signatureFile.name : ''
    };

    this.authService.register(newUser).subscribe(
      response => {
        console.log('Registro exitoso:', response);
      },
      error => {
        console.error('Error en el registro:', error);
      }
    );
  }
}
