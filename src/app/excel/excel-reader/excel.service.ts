import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private readonly filePath = 'assets/bbdd/users.xlsx';

  constructor(private http: HttpClient) {}


  const Excel = require("exceljs");

// Función para leer y escribir en un archivo Excel existente
async function readAndWriteExcel() {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile("./users.xls"); // Lee el archivo existente

  const worksheet = workbook.getWorksheet("My Sheet");

  // Agrega una nueva fila al final del archivo
  worksheet.addRow({ id: 3, name: "Alice Smith", dob: new Date(1985, 5, 15) });

  // Guarda los cambios en el archivo
  await workbook.xlsx.writeFile("./users.xls");
}

// Llama a la función para leer y escribir en el archivo
readAndWriteExcel()
  .then(() => {
    console.log("Archivo actualizado correctamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar el archivo:", error);
  });

