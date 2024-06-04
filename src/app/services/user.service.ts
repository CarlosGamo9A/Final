import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  private headers: string[] = [];
  private selectedUser: any;
  private signatureImages: string[] = []; // Array para múltiples firmas

  setUsers(users: any[]): void {
    this.users = users;
    this.headers = users.length > 0 ? Object.keys(users[0]) : [];
  }

  getUsers(): any[] {
    return this.users;
  }

  getHeaders(): string[] {
    return this.headers;
  }

  setSelectedUser(user: any): void {
    this.selectedUser = user;
  }

  getSelectedUser(): any {
    return this.selectedUser;
  }

  setSignatureImages(signatureImages: string[]): void {
    this.signatureImages = signatureImages;
  }

  getSignatureImages(): string[] {
    return this.signatureImages;
  }
}
