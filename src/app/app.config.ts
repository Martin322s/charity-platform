import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'top'
			})
		),
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	]
};