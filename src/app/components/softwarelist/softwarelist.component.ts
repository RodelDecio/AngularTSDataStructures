import { Component } from '@angular/core';
import { SoftwareListService } from '../../services/softwarelist/softwarelist.service';
import { Software } from '../../interface/software';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrls: ['./softwarelist.component.css']
})
export class SoftwareListComponent {
  softwareList: Software[] = [];
  name: string = '';
  version: string = '';
  license: string = '';

  constructor(private softwareListService: SoftwareListService) {
    this.softwareList = this.softwareListService.getSoftwareList();
  }

  addSoftware(): void {
    this.softwareListService.addSoftware(this.name, this.version, this.license);
    this.resetForm();
  }

  removeSoftware(index: number): void {
    this.softwareListService.removeSoftware(index);
  }

  resetForm(): void {
    this.name = '';
    this.version = '';
    this.license = '';
  }
}
