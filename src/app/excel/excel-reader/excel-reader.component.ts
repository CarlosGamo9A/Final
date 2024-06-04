// import { Component, ViewChild } from '@angular/core';
// import * as XLSX from 'xlsx';
// import { ExcelService } from './excel.service';


// @Component({
//   selector: 'app-excel-reader',
//   templateUrl: './excel-reader.component.html',
//   styleUrls: ['./excel-reader.component.css']
// })
// export class ExcelReaderComponent {
//   @ViewChild('fileInput') fileInput: any;

//   constructor(private excelService: ExcelService) { }

//   readExcelFile(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       this.excelService.readExcel(file).then(data => {
//         console.log('Datos del archivo Excel:', data);
//         // Aquí puedes hacer lo que quieras con los datos del archivo Excel
//       }).catch(error => {
//         console.error('Error al leer el archivo Excel:', error);
//       });
//     }
//   }
// }
