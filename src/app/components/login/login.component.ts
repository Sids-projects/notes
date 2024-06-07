import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  private predefinedUsername: string = 'admin';
  private predefinedPassword: string = 'password123';

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (
      username === this.predefinedUsername &&
      password === this.predefinedPassword
    ) {
      this.proceedToNextStep();
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  proceedToNextStep() {
    // Implement your logic to proceed to the next step
    console.log('Login successful, proceed to the next step');
  }
}
