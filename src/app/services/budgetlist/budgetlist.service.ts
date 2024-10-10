import { Injectable } from '@angular/core';
import { Budget } from '../../interface/budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetListService {
  private budgetItems: Budget[] = [];

  constructor() {}

  addBudgetItem(id: string, description: string, amount: number, date: Date): void {
    this.budgetItems.push({ id, description, amount, date });
  }

  getBudgetItems(): Budget[] {
    return this.budgetItems;
  }

  removeBudgetItem(index: number): void {
    this.budgetItems.splice(index, 1);
  }
}
