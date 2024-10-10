import { Injectable } from '@angular/core';
import { Framework } from '../../interface/framework';

@Injectable({
  providedIn: 'root',
})
export class FrameworkListService {
  frameworks: Framework[] = [];

  constructor() {}

  addFramework(id: string, name: string, description: string, language: string): void {
    this.frameworks.push({
      id: id,
      name: name,
      description: description,
      language: language
    });
  }

  getFrameworks(): Framework[] {
    return this.frameworks;
  }

  removeFramework(index: number): void {
    this.frameworks.splice(index, 1);
  }
}
