import { Injectable } from '@angular/core';
import { Event } from "../../interface/event";

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  events: Event[] = [];

  constructor() {}

  addEvent(id: string, name: string, date: string, location: string): void {
    this.events.push({
      id: id,
      name: name,
      date: date,
      location: location
    });
  }

  getEvents(): Event[] {
    return this.events;
  }

  removeEvent(index: number): void {
    this.events.splice(index, 1);
  }
}
