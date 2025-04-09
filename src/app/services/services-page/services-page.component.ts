import { Component } from '@angular/core';
import { ServicesHeaderComponent } from "../services-header/services-header.component";
import { ServiceExamplesComponent } from "../service-examples/service-examples.component";

@Component({
  selector: 'app-services-page',
  imports: [ServicesHeaderComponent, ServiceExamplesComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

}
