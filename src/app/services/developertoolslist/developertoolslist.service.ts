import { Injectable } from '@angular/core';
import { DeveloperTool } from '../../interface/developertools';

@Injectable({
  providedIn: 'root',
})
export class DeveloperToolsListService {
  developerTools: DeveloperTool[] = [];

  constructor() {}

  addDeveloperTool(id: string, name: string, description: string, version: string): void {
    this.developerTools.push({
      id: id,
      name: name,
      description: description,
      version: version
    });
  }

  getDeveloperTools(): DeveloperTool[] {
    return this.developerTools;
  }

  removeDeveloperTool(index: number): void {
    this.developerTools.splice(index, 1);
  }
}
