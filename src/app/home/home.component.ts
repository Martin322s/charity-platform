import { Component } from '@angular/core';
import { HomeCarouselComponent } from "../home-carousel/home-carousel.component";
import { HomeAboutSectionComponent } from "../home-about-section/home-about-section.component";
import { HomeServicesComponent } from '../home-services/home-services.component';
import { HomeVolunteersComponent } from "../home-volunteers/home-volunteers.component";

@Component({
	selector: 'app-home',
	imports: [
		HomeCarouselComponent,
		HomeAboutSectionComponent,
		HomeServicesComponent,
		HomeVolunteersComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

}
