import { Component } from '@angular/core';
import { DeveloperToolsListService } from '../../services/developertoolslist/developertoolslist.service';
import { DeveloperTool } from '../../interface/developertools';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrls: ['./developertoolslist.component.css']
})
export class DeveloperToolsListComponent {
  developerTools: DeveloperTool[] = [];
  id: string = '';
  name: string = '';
  description: string = '';
  version: string = '';

  constructor(private developerToolsListService: DeveloperToolsListService) {
    this.developerTools = this.developerToolsListService.getDeveloperTools();
  }

  addDeveloperTool(): void {
    this.developerToolsListService.addDeveloperTool(
      this.id,
      this.name,
      this.description,
      this.version
    );

    this.id = '';
    this.name = '';
    this.description = '';
    this.version = '';
  }

  removeDeveloperTool(index: number): void {
    this.developerToolsListService.removeDeveloperTool(index);
  }
}
