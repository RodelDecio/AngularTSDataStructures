import { Component } from '@angular/core';
import { ComposerListService} from "../../services/composerlist/composerlist.service";
import { Composer } from '../../interface/composer';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrls: ['./composerlist.component.css'],
})
export class ComposerListComponent {
  composers: Composer[] = [];
  id: string = '';
  name: string = '';
  birthYear: number = 0;
  nationality: string = '';
  famousWorks: string = '';

  constructor(private composerService: ComposerListService) {
    this.composers = this.composerService.getComposers();
  }

  addComposer(): void {
    this.composerService.addComposer(this.id, this.name, this.birthYear, this.nationality, this.famousWorks.split(','));
    this.resetForm();
  }

  removeComposer(index: number): void {
    this.composerService.removeComposer(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.birthYear = 0;
    this.nationality = '';
    this.famousWorks = '';
  }
}
