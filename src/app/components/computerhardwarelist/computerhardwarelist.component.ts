import { Component } from '@angular/core';
import { ComputerHardwareService} from "../../services/computerhardwarelist/computerhardwarelist.service";
import { ComputerHardware} from "../../interface/computerhardware";

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrls: ['./computerhardwarelist.component.css'],
})
export class ComputerHardwareListComponent {
  hardwareList: ComputerHardware[] = [];
  id: string = '';
  name: string = '';
  type: string = '';
  manufacturer: string = '';
  price: number = 0;

  constructor(private hardwareService: ComputerHardwareService) {
    this.hardwareList = this.hardwareService.getHardwareList();
  }

  addHardware(): void {
    this.hardwareService.addHardware(
      this.id,
      this.name,
      this.type,
      this.manufacturer,
      this.price
    );
    this.resetForm();
  }

  removeHardware(index: number): void {
    this.hardwareService.removeHardware(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.type = '';
    this.manufacturer = '';
    this.price = 0;
  }
}
