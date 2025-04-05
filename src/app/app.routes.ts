import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ServicesPageComponent } from './services/services-page/services-page.component';
import { CausesPageComponent } from './causes/causes-page/causes-page.component';
import { CauseDetailsPageComponent } from './cause-details/cause-details-page/cause-details-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'services', component: ServicesPageComponent },
	{ path: 'causes', component: CausesPageComponent },
	{ path: 'cause-details/:causeId', component: CauseDetailsPageComponent }
];