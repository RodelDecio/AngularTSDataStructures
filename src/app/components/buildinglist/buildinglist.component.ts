import { Component } from '@angular/core';
import { BuildingListService} from "../../services/buildinglist/buildinglist.service";
import { Building } from '../../interface/building';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.css'],
})
export class BuildingListComponent {
  buildings: Building[] = [];
  id: string = '';
  name: string = '';
  location: string = '';
  floors: number = 0;
  purpose: string = '';

  constructor(private buildingService: BuildingListService) {
    this.buildings = this.buildingService.getBuildings();
  }

  addBuilding(): void {
    this.buildingService.addBuilding(this.id, this.name, this.location, this.floors, this.purpose);
    this.resetForm();
  }

  removeBuilding(index: number): void {
    this.buildingService.removeBuilding(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.location = '';
    this.floors = 0;
    this.purpose = '';
  }
}
