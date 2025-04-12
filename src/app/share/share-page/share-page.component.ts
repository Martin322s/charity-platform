import { Component } from '@angular/core';
import { ShareEventComponent } from "../share-event/share-event.component";
import { ShareCauseComponent } from "../share-cause/share-cause.component";

@Component({
  selector: 'app-share-page',
  imports: [ShareEventComponent, ShareCauseComponent],
  templateUrl: './share-page.component.html',
  styleUrl: './share-page.component.css'
})
export class SharePageComponent {

}
