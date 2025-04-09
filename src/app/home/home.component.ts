import { Component } from '@angular/core';
import { HomeCarouselComponent } from "../home-carousel/home-carousel.component";
import { HomeAboutSectionComponent } from "../home-about-section/home-about-section.component";

@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, HomeAboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
