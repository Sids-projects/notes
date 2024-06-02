import { Component, Renderer2 } from '@angular/core';
import { SharedService } from './shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes';
  hideMainTopic: any;
  hideTopics: boolean = true;
  hideContent: any;
  hideContentHead: boolean = true;
  isDarkTheme: boolean = false;
  mainContent: boolean = true;
  taskContent: boolean = false;
  contentMenu: boolean = false;
  appHeader: any;
  jsTopics: any;

  topicName: string = 'Javascript';
  javascript: boolean = true;
  angular: boolean = false;
  css: boolean = false;
  scss: boolean = false;

  jsHelloComponent: boolean = false;
  cssHelloComponent: boolean = false;
  scssHelloComponent: boolean = false;
  ngHelloComponent: boolean = false;
  jsIntroComponent: boolean = false;
  jsVariablesComponent: boolean = false;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
    this.appHeader = this.sharedService.appHeader;
    this.jsTopics = this.sharedService.topicList.jsTopics;
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.routeActive(event.url);
      });
  }

  ngOnInit() {
    // Check localStorage for saved theme state
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  navControl() {
    this.hideTopics = !this.hideTopics;
  }

  matchTopic(param: any) {
    this.hideMainTopic = param;
  }

  showTopicList(param: string) {
    if (param === 'javascript') {
      this.javascript = true;
      this.angular = false;
      this.css = false;
      this.scss = false;
      this.topicName = 'Javascript';
    } else if (param === 'angular') {
      this.javascript = false;
      this.angular = true;
      this.css = false;
      this.scss = false;
      this.topicName = 'Angular';
    } else if (param === 'css') {
      this.javascript = false;
      this.angular = false;
      this.css = true;
      this.scss = false;
      this.topicName = 'Css';
    } else if (param === 'scss') {
      this.javascript = false;
      this.angular = false;
      this.css = false;
      this.scss = true;
      this.topicName = 'Scss';
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

  routeActive(currentRoute: string) {
    // // Main Routes
    this.jsHelloComponent = currentRoute.includes('jsHelloComponent');
    this.cssHelloComponent = currentRoute.includes('cssHelloComponent');
    this.scssHelloComponent = currentRoute.includes('scssHelloComponent');
    this.ngHelloComponent = currentRoute.includes('ngHelloComponent');

    // // Js Components
    this.jsIntroComponent = currentRoute.includes('jsIntroComponent');
    this.jsVariablesComponent = currentRoute.includes('jsVariablesComponent');
  }

  tasks() {
    this.mainContent = false;
    this.taskContent = true;
  }

  content() {
    this.mainContent = true;
    this.taskContent = false;
  }

  showMenu() {
    this.contentMenu = !this.contentMenu;
  }

  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
