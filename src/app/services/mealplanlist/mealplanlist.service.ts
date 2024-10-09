import { Injectable } from '@angular/core';
import { MealPlan } from '../../interface/mealplan';

@Injectable({
  providedIn: 'root',
})
export class MealPlanListService {
  private mealPlans: MealPlan[] = [];

  constructor() {}

  addMeal(id: string, day: string, mealType: string, description: string): void {
    this.mealPlans.push({ id, day, mealType, description });
  }

  getMeals(): MealPlan[] {
    return this.mealPlans;
  }

  removeMeal(index: number): void {
    this.mealPlans.splice(index, 1);
  }
}
