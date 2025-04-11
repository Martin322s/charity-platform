import { Component } from '@angular/core';
import { EventDetailsViewComponent } from "../event-details-view/event-details-view.component";

@Component({
  selector: 'app-event-details-page',
  imports: [EventDetailsViewComponent],
  templateUrl: './event-details-page.component.html',
  styleUrl: './event-details-page.component.css'
})
export class EventDetailsPageComponent {

}
