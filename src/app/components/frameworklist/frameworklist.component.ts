import { Component } from '@angular/core';
import { FrameworkListService } from '../../services/frameworklist/frameworklist.service';
import { Framework } from '../../interface/framework';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrls: ['./frameworklist.component.css']
})
export class FrameworkListComponent {
  frameworks: Framework[] = [];
  id: string = '';
  name: string = '';
  description: string = '';
  language: string = '';

  constructor(private frameworkListService: FrameworkListService) {
    this.frameworks = this.frameworkListService.getFrameworks();
  }

  addFramework(): void {
    this.frameworkListService.addFramework(
      this.id,
      this.name,
      this.description,
      this.language
    );

    this.id = '';
    this.name = '';
    this.description = '';
    this.language = '';
  }

  removeFramework(index: number): void {
    this.frameworkListService.removeFramework(index);
  }
}
