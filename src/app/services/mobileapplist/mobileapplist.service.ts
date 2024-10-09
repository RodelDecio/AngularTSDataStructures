import { Injectable } from '@angular/core';
import { MobileApp } from '../../interface/mobileapp';

@Injectable({
  providedIn: 'root',
})
export class MobileAppListService {
  private apps: MobileApp[] = [];

  constructor() {}

  addApp(id: string, name: string, category: string, version: string, developer: string): void {
    this.apps.push({
      id,
      name,
      category,
      version,
      developer,
    });
  }

  getApps(): MobileApp[] {
    return this.apps;
  }

  removeApp(index: number): void {
    this.apps.splice(index, 1);
  }
}
