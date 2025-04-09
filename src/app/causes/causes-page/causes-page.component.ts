import { Component } from '@angular/core';
import { CausesHeaderComponent } from "../causes-header/causes-header.component";
import { CausesContentComponent } from "../causes-content/causes-content.component";

@Component({
  selector: 'app-causes-page',
  imports: [CausesHeaderComponent, CausesContentComponent],
  templateUrl: './causes-page.component.html',
  styleUrl: './causes-page.component.css'
})
export class CausesPageComponent {

}
