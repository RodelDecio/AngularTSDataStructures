import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrls: ['./softwarelist.component.css']
})
export class SoftwareListComponent {
  softwareList: string[] = ['Microsoft Word', 'Adobe Photoshop', 'Google Chrome', 'Visual Studio Code'];
  software: string = '';

  addSoftware(): void {
    if (this.software.trim()) {
      this.softwareList.push(this.software.trim());
      this.software = '';
    }
  }

  removeSoftware(index: number): void {
    this.softwareList.splice(index, 1);
  }
}
