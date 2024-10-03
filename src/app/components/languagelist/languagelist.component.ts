import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.css']
})
export class LanguageListComponent {
  languageList: string[] = ['JavaScript', 'Python', 'Java', 'C++'];
  language: string = '';

  addLanguage(): void {
    if (this.language.trim()) {
      this.languageList.push(this.language.trim());
      this.language = '';
    }
  }

  removeLanguage(index: number): void {
    this.languageList.splice(index, 1);
  }
}
