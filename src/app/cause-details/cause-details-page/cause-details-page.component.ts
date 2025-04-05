import { Component } from '@angular/core';
import { CasueDetailsHeroComponent } from "../casue-details-hero/casue-details-hero.component";
import { CasueDonationProgressComponent } from '../casue-donation-progress/casue-donation-progress.component';
import { CasueDonationContentComponent } from "../casue-donation-content/casue-donation-content.component";
import { CasueDonationOrganaizerComponent } from "../casue-donation-organaizer/casue-donation-organaizer.component";

@Component({
  selector: 'app-cause-details-page',
  imports: [CasueDetailsHeroComponent, CasueDonationProgressComponent, CasueDonationContentComponent, CasueDonationOrganaizerComponent],
  templateUrl: './cause-details-page.component.html',
  styleUrl: './cause-details-page.component.css'
})
export class CauseDetailsPageComponent {

}
