import { Component } from '@angular/core';
import { AboutHeaderComponent } from "../about-header/about-header.component";
import { HomeAboutSectionComponent } from "../../home-page/home-about-section/home-about-section.component";
import { HomeVolunteersComponent } from "../../home-page/home-volunteers/home-volunteers.component";

@Component({
  selector: 'app-about-page',
  imports: [AboutHeaderComponent, HomeAboutSectionComponent, HomeVolunteersComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
