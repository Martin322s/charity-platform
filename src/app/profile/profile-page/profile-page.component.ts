import { Component } from '@angular/core';
import { ProfileInfoComponent } from "../profile-info/profile-info.component";
import { ProfileCausesComponent } from "../profile-causes/profile-causes.component";
import { ProfileEventsComponent } from "../profile-events/profile-events.component";

@Component({
  selector: 'app-profile-page',
  imports: [ProfileInfoComponent, ProfileCausesComponent, ProfileEventsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
