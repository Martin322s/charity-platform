import { Component } from '@angular/core';
import { AboutHeaderComponent } from "../about-header/about-header.component";
import { HomeVolunteersComponent } from "../../home-page/home-volunteers/home-volunteers.component";
import { AboutSectionComponent } from "../about-section/about-section.component";
import { AboutVolunteersComponent } from "../about-volunteers/about-volunteers.component";

@Component({
  selector: 'app-about-page',
  imports: [AboutHeaderComponent, AboutSectionComponent, AboutVolunteersComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
