import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ExcelService } from '../../excel/excel-reader/excel.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  selectedFile: File | null = null;

  constructor(private router: Router, private excelService: ExcelService) {}

  login(): void {
    this.excelService.readExcelFromAssets().subscribe({
      next: (data: any[]) => {
        const user = data.find(u => u.name === this.username && u.password === this.password);
        if (user) {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/proyectos']);
        } else {
          this.errorMessage = 'Credenciales inválidas';
          console.error('Error en el inicio de sesión: Credenciales inválidas');
        }
      },
      error: () => {
        this.errorMessage = 'Error al leer el archivo Excel';
        console.error('Error al leer el archivo Excel');
      }
    });
  }
}
