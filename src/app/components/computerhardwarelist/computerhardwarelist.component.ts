import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrls: ['./computerhardwarelist.component.css']
})
export class ComputerHardwareListComponent {
  hardwareItems: string[] = ['CPU', 'GPU', 'Motherboard', 'RAM'];
  hardware: string = '';

  addHardware(): void {
    if (this.hardware.trim()) {
      this.hardwareItems.push(this.hardware.trim());
      this.hardware = '';
    }
  }

  removeHardware(index: number): void {
    this.hardwareItems.splice(index, 1);
  }
}
