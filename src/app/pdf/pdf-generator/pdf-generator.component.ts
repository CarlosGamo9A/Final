import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css'],
  standalone: true
})
export class PdfGeneratorComponent {
  constructor(private userService: UserService) { }

  exportToPDF(): void {
    const selectedUser = this.userService.getSelectedUser();
    if (!selectedUser) {
      console.error('No hay una fila seleccionada.');
      return;
    }

    const doc = new jsPDF();
    const header = this.userService.getHeaders();
    const data = [header.map(field => selectedUser[field])];

    doc.text('Datos de Usuario', 10, 10);
    autoTable(doc, {
      head: [header],
      body: data
    });
    const currentDate = new Date().toLocaleDateString();
    doc.text(`Fecha: ${currentDate}`, 10, (doc as any).lastAutoTable.finalY + 10);

    const signatureImages = this.userService.getSignatureImages();
    if (signatureImages.length > 0) {
      const imgWidth = 100;
      const imgHeight = 50;
      signatureImages.forEach((signature, index) => {
        const positionY = (doc as any).lastAutoTable.finalY + 30 * (index + 1);
        doc.text(`Firma ${index + 1}:`, 10, positionY);
        doc.addImage(signature, 'JPEG', 30, positionY + 5, imgWidth, imgHeight);
      });
    }

    doc.save('selected_user.pdf');
  }

  exportAllToPDF(): void {
    const users = this.userService.getUsers();
    if (!users || users.length === 0) {
      console.error('No hay datos para exportar.');
      return;
    }

    const doc = new jsPDF();
    const header = this.userService.getHeaders();
    const data = users.map(user => header.map(field => user[field]));

    doc.text('Datos de Todos los Usuarios', 10, 10);
    autoTable(doc, {
      head: [header],
      body: data
    });

    const currentDate = new Date().toLocaleDateString();
    doc.text(`Fecha: ${currentDate}`, 10, (doc as any).lastAutoTable.finalY + 10);

    const signatureImages = this.userService.getSignatureImages();
    if (signatureImages.length > 0) {
      const imgWidth = 100;
      const imgHeight = 50;
      signatureImages.forEach((signature, index) => {
        const positionY = (doc as any).lastAutoTable.finalY + 30 * (index + 1);
        doc.text(`Firma ${index + 1}:`, 10, positionY);
        doc.addImage(signature, 'JPEG', 30, positionY + 5, imgWidth, imgHeight);
      });
    }

    doc.save('all_users.pdf');
  }
}
