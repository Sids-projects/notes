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
  loginForm: FormGroup;
  errorMessage: string | null = null;

  private predefinedUsername: string = 'admin';
  private predefinedPassword: string = 'password123';

  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {
    this.appHeader = this.sharedService.appHeader;
    const storedComponents = localStorage.getItem('components');
    this.components = storedComponents ? storedComponents : 'javascript'; // Set default if not found

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    // Restore login and main screen state from localStorage
    this.loginScreen = localStorage.getItem('loginScreen') === 'true';
    this.mainScreen = localStorage.getItem('mainScreen') === 'true';
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
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

  componentMain(param: string) {
    this.components = param;
    localStorage.setItem('components', param); // Save immediately on change
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (
      username === this.predefinedUsername &&
      password === this.predefinedPassword
    ) {
      this.loginScreen = false;
      this.mainScreen = true;
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  logout() {
    this.loginScreen = true;
    this.mainScreen = false;
  }

  // Getter and Setter for loginScreen
  get loginScreen(): boolean {
    return localStorage.getItem('loginScreen') === 'true';
  }

  set loginScreen(value: boolean) {
    localStorage.setItem('loginScreen', value.toString());
  }

  // Getter and Setter for mainScreen
  get mainScreen(): boolean {
    return localStorage.getItem('mainScreen') === 'true';
  }

  set mainScreen(value: boolean) {
    localStorage.setItem('mainScreen', value.toString());
  }
}
