import { Component } from '@angular/core';
import { BudgetListService} from "../../services/budgetlist/budgetlist.service";
import { Budget } from '../../interface/budget';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css'],
})
export class BudgetListComponent {
  budgetItems: Budget[] = [];
  id: string = '';
  description: string = '';
  amount: number | null = null;
  date: Date | null = null;

  constructor(private budgetService: BudgetListService) {
    this.budgetItems = this.budgetService.getBudgetItems();
  }

  addBudgetItem(): void {
    if (this.amount !== null && this.date) {
      this.budgetService.addBudgetItem(this.id, this.description, this.amount, this.date);
      this.resetForm();
    }
  }

  removeBudgetItem(index: number): void {
    this.budgetService.removeBudgetItem(index);
  }

  resetForm(): void {
    this.id = '';
    this.description = '';
    this.amount = null;
    this.date = null;
  }
}
