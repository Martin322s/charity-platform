import { Component } from '@angular/core';
import { ShareEventComponent } from "../share-event/share-event.component";
import { ShareCauseComponent } from "../share-cause/share-cause.component";
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-share-page',
	standalone: true,
	imports: [ShareEventComponent, ShareCauseComponent, CommonModule],
	templateUrl: './share-page.component.html',
	styleUrls: ['./share-page.component.css']
})
export class SharePageComponent {
	activeTab: 'event' | 'donation' = 'event';

	setTab(tab: 'event' | 'donation') {
		this.activeTab = tab;
	}
}
