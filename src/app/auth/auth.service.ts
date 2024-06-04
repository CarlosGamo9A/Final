import { Injectable } from '@angular/core';

import { Observable, from, of } from 'rxjs';
import { ExcelService } from '../excel/excel-reader/excel.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private excelService: ExcelService) { }

  register(newUser: any): Observable<any> {
    // Lógica de registro simulada para un registro exitoso
    // Reemplaza este código con la lógica real de registro que interactúa con tu backend
    return from(this.excelService.writeExcel([newUser]));
  }

  isLoggedIn(): Observable<boolean> {
    // Comprueba si hay un token almacenado en el almacenamiento local
    const token = localStorage.getItem('token');
    if (token) {
      // Si hay un token, verifica si ha expirado (aquí necesitas implementar tu lógica para verificar la expiración del token)
      // Por ahora, supondremos que el token nunca expira
      return of(true);
    } else {
      // Si no hay un token, el usuario no está autenticado
      return of(false);
    }
  }
}
