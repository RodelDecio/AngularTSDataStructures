import { Component } from '@angular/core';
import { PhoneListService } from '../../services/phonelist/phonelist.service';
import { Phone} from "../../interface/phone";

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']

})
export class PhoneListComponent {
  contacts: Phone[] = [];
  id: string = '';
  name: string = '';
  phone: string = '';
  email: string = '';

  constructor(private phoneListService: PhoneListService) {
    this.contacts = this.phoneListService.getContacts();
  }

  addContact(): void {
    this.phoneListService.addContact(this.id, this.name, this.phone, this.email);
    this.resetForm();
  }

  removeContact(index: number): void {
    this.phoneListService.removeContact(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}
