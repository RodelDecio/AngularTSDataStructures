import { Component } from '@angular/core';
import { ExerciseListService} from "../../services/exerciselist/exerciselist.service";
import { Exercise } from '../../interface/exercise';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.css'],
})
export class ExerciseListComponent {
  exercises: Exercise[] = [];
  id: string = '';
  name: string = '';
  duration: number = 0;
  repetitions: number = 0;
  description: string = '';

  constructor(private exerciseService: ExerciseListService) {
    this.exercises = this.exerciseService.getExercises();
  }

  addExercise(): void {
    this.exerciseService.addExercise(this.id, this.name, this.duration, this.repetitions, this.description);
    this.resetForm();
  }

  removeExercise(index: number): void {
    this.exerciseService.removeExercise(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.duration = 0;
    this.repetitions = 0;
    this.description = '';
  }
}
