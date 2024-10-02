import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeeListComponent {
  employeeList: string[] = ['Rodel Decio', 'Lorenz Camo', 'Rodel Calda', 'Christine Jane Maitom'];
  employee: string = '';


  addEmployee(): void {
    if (this.employee.trim()) {
      this.employeeList.push(this.employee.trim());
      this.employee = '';
    }
  }


  removeEmployee(index: number): void {
    this.employeeList.splice(index, 1);
  }
}
