import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements AfterViewInit, OnInit {

  @ViewChild('canvas', { static: true })
  signaturePadElement!: ElementRef<HTMLCanvasElement>;
  signaturePad!: SignaturePad;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const canvas: HTMLCanvasElement = this.signaturePadElement.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      penColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgb(255, 255, 255)'
    });
    this.signaturePad.clear();
  }

  isCanvasBlank(): boolean {
    return this.signaturePad.isEmpty();
  }

  saveSignature() {
    if (!this.isCanvasBlank()) {
      const dataURL = this.signaturePad.toDataURL('image/png');
      const blob = this.convertBase64toBlob(dataURL);
      console.log(blob);
      // Aquí puedes manejar el blob (por ejemplo, subirlo a un servidor)
    }
  }

  convertBase64toBlob(dataURL: string): Blob {
    const byteString = atob(dataURL.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }

  clear() {
    this.signaturePad.clear();
  }

  return() {
    // Aquí debes manejar la lógica para cerrar el modal
  }
}
