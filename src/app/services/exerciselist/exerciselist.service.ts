import { Injectable } from '@angular/core';
import { Exercise } from '../../interface/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseListService {
  private exercises: Exercise[] = [];

  constructor() {}

  addExercise(id: string, name: string, duration: number, repetitions: number, description: string): void {
    this.exercises.push({ id, name, duration, repetitions, description });
  }

  getExercises(): Exercise[] {
    return this.exercises;
  }

  removeExercise(index: number): void {
    this.exercises.splice(index, 1);
  }
}
