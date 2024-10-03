import { Component } from '@angular/core';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhoneListComponent {
  phoneList: { name: string; number: string }[] = [
    { name: 'Rodel Decio', number: '09123456789' },
    { name: 'Lorenz Camo', number: '09874563210' },
    { name: 'Rodel Calda', number: '09632587712' },
    { name: 'Christine Maitom', number: '09514753268' }
  ];

  contact: { name: string; number: string } = { name: '', number: '' };

  addContact(): void {
    if (this.contact.name.trim() && this.contact.number.trim()) {
      this.phoneList.push({ name: this.contact.name.trim(), number: this.contact.number.trim() });
      this.contact = { name: '', number: '' };
    }
  }

  removeContact(index: number): void {
    this.phoneList.splice(index, 1);
  }
}
