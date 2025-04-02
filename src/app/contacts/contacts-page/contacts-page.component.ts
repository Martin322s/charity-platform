import { Component } from '@angular/core';
import { ContactsHeaderComponent } from '../contacts-header/contacts-header.component';
import { ContactsContentComponent } from "../contacts-content/contacts-content.component";

@Component({
  selector: 'app-contacts-page',
  imports: [ContactsHeaderComponent, ContactsContentComponent],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css'
})
export class ContactsPageComponent {

}
