import { Component } from '@angular/core';
import { MobileAppListService} from "../../services/mobileapplist/mobileapplist.service";
import { MobileApp } from '../../interface/mobileapp';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrls: ['./mobileapplist.component.css'],
})
export class MobileAppListComponent {
  apps: MobileApp[] = [];
  id: string = '';
  name: string = '';
  category: string = '';
  version: string = '';
  developer: string = '';

  constructor(private appService: MobileAppListService) {
    this.apps = this.appService.getApps();
  }

  addApp(): void {
    this.appService.addApp(
      this.id,
      this.name,
      this.category,
      this.version,
      this.developer
    );
    this.resetForm();
  }

  removeApp(index: number): void {
    this.appService.removeApp(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.category = '';
    this.version = '';
    this.developer = '';
  }
}
