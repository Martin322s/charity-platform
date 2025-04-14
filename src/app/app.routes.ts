import { Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ServicesPageComponent } from './services/services-page/services-page.component';
import { CausesPageComponent } from './causes/causes-page/causes-page.component';
import { CauseDetailsPageComponent } from './cause-details/cause-details-page/cause-details-page.component';
import { ContactsPageComponent } from './contacts/contacts-page/contacts-page.component';
import { EventsPageComponent } from './events/events-page/events-page.component';
import { EventDetailsPageComponent } from './event-details/event-details-page/event-details-page.component';
import { SharePageComponent } from './share/share-page/share-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomeComponent } from './home-page/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'services', component: ServicesPageComponent },
	{ path: 'causes', component: CausesPageComponent },
	{ path: 'cause-details/:causeId', component: CauseDetailsPageComponent },
	{ path: 'contacts', component: ContactsPageComponent },
	{ path: 'events', component: EventsPageComponent },
	{ path: 'event-details/:eventId', component: EventDetailsPageComponent },
	{ path: 'share', component: SharePageComponent },
	{ path: 'profile', component: ProfilePageComponent },
	{ path: 'login', component: LoginPageComponent },
];