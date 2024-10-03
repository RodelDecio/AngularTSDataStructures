import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.css']
})
export class BuildingListComponent {
  buildings: string[] = ['Administration Building', 'Library', 'Science Building', 'Computer Lab'];
  building: string = '';

  addBuilding(): void {
    if (this.building.trim()) {
      this.buildings.push(this.building.trim());
      this.building = '';
    }
  }

  removeBuilding(index: number): void {
    this.buildings.splice(index, 1);
  }
}
