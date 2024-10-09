import { Component } from '@angular/core';
import { MealPlanListService} from "../../services/mealplanlist/mealplanlist.service";
import { MealPlan } from '../../interface/mealplan';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrls: ['./mealplanlist.component.css'],
})
export class MealPlanListComponent {
  mealPlans: MealPlan[] = [];
  id: string = '';
  day: string = '';
  mealType: string = '';
  description: string = '';

  constructor(private mealPlanService: MealPlanListService) {
    this.mealPlans = this.mealPlanService.getMeals();
  }

  addMeal(): void {
    this.mealPlanService.addMeal(this.id, this.day, this.mealType, this.description);
    this.resetForm();
  }

  removeMeal(index: number): void {
    this.mealPlanService.removeMeal(index);
  }

  resetForm(): void {
    this.id = '';
    this.day = '';
    this.mealType = '';
    this.description = '';
  }
}
