import { Component } from '@angular/core';
import { EventListService } from "../../services/eventlist/eventlist.service";
import { Event } from "../../interface/event";

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventListComponent {
  events: Event[] = [];
  id: string = '';
  name: string = '';
  date: string = '';
  location: string = '';

  constructor(private eventListService: EventListService) {
    this.events = this.eventListService.getEvents();
  }

  addEvent(): void {
    this.eventListService.addEvent(
      this.id,
      this.name,
      this.date,
      this.location
    );

    this.id = '';
    this.name = '';
    this.date = '';
    this.location = '';
  }

  removeEvent(index: number): void {
    this.eventListService.removeEvent(index);
  }
}
