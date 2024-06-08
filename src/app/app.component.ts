import { Component, Renderer2 } from '@angular/core';
import { SharedService } from './shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes';
  isDarkTheme: boolean = false;
  appHeader: any;
  components: string = 'javascript';
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  loginScreen: boolean = true;
  mainScreen: boolean = false;

  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {
    this.appHeader = this.sharedService.appHeader;
    const storedComponents = localStorage.getItem('components');
    this.components = storedComponents ? storedComponents : 'javascript'; // Set default if not found
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const getLoginScreen = localStorage.getItem('loginScreen');
    const getMainScreen = localStorage.getItem('mainScreen');

    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }

    if (getLoginScreen === 'true') {
      this.loginScreen = true;
    } else {
      this.loginScreen = false;
    }

    if (getMainScreen === 'true') {
      this.mainScreen = true;
    } else {
      this.mainScreen = false;
    }

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  componentMain(param: string) {
    this.components = param;
    localStorage.setItem('components', param); // Save immediately on change
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark'); // Save theme state to localStorage
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light'); // Save theme state to localStorage
    }
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (username === 'user01' && password === 'pass01') {
      this.loginScreen = false;
      this.mainScreen = true;
      localStorage.setItem('loginScreen', 'false');
      localStorage.setItem('mainScreen', 'true');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  logout() {
    this.loginScreen = true;
    this.mainScreen = false;
    localStorage.setItem('loginScreen', 'true');
    localStorage.setItem('mainScreen', 'false');
  }
}
