import { Injectable } from '@angular/core';
import { ComputerHardware} from "../../interface/computerhardware";

@Injectable({
  providedIn: 'root',
})
export class ComputerHardwareService {
  private hardwareList: ComputerHardware[] = [];

  constructor() {}

  addHardware(id: string, name: string, type: string, manufacturer: string, price: number): void {
    this.hardwareList.push({
      id,
      name,
      type,
      manufacturer,
      price,
    });
  }

  getHardwareList(): ComputerHardware[] {
    return this.hardwareList;
  }

  removeHardware(index: number): void {
    this.hardwareList.splice(index, 1);
  }
}
