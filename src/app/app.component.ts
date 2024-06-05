import { Component, Renderer2 } from '@angular/core';
import { SharedService } from './shared.service';

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
    const mainComponent = localStorage.getItem('components');
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
}
