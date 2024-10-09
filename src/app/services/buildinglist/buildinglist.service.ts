import { Injectable } from '@angular/core';
import { Building } from '../../interface/building';

@Injectable({
  providedIn: 'root',
})
export class BuildingListService {
  private buildings: Building[] = [];

  constructor() {}

  addBuilding(id: string, name: string, location: string, floors: number, purpose: string): void {
    this.buildings.push({ id, name, location, floors, purpose });
  }

  getBuildings(): Building[] {
    return this.buildings;
  }

  removeBuilding(index: number): void {
    this.buildings.splice(index, 1);
  }
}
