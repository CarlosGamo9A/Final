import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from '../excel/excel-reader/excel.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ExcelService]
})
export class ProjectsComponent {

  constructor(private router: Router, private excelService: ExcelService) { }

  redirectToExcel(type: string): void {
    let filePath: string;

    switch (type) {
      case 'alquiler':
        filePath = 'assets/alquiler.xlsx';
        break;
      case 'venta':
        filePath = 'assets/venta.xlsx';
        break;
      case 'fabricacion':
        filePath = 'assets/fabricacion.xlsx';
        break;
      default:
        return;
    }

    this.excelService.readExcelFromAssets().subscribe(data => {
      // Aquí puedes realizar las operaciones que necesites con los datos del archivo Excel, por ejemplo, mostrarlos en una tabla o procesarlos de alguna manera.
      console.log(data);
    }, error => {
      console.error('Error al leer el archivo Excel:', error);
    });
  }
}
