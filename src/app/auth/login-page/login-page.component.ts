import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [CommonModule, LoginFormComponent, RegisterFormComponent],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
	activeForm: 'login' | 'register' = 'login';

	setForm(form: 'login' | 'register') {
		this.activeForm = form;
	}
}