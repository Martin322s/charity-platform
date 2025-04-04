import { Component } from '@angular/core';
import { EventsHeaderComponent } from '../events-header/events-header.component';
import { EventsContentComponent } from "../events-content/events-content.component";

@Component({
  selector: 'app-events-page',
  imports: [EventsHeaderComponent, EventsContentComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {

}
