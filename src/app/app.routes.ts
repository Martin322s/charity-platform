import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { AboutPageComponent } from './about/about-page/about-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutPageComponent },
];