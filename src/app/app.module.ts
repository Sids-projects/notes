import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './screens/javascript/javascript.component';
import { AngularComponent } from './screens/angular/angular.component';
import { ScssComponent } from './screens/scss/scss.component';
import { CssComponent } from './screens/css/css.component';
import { TypescriptComponent } from './screens/typescript/typescript.component';
import { JsIntroComponent } from './jsTopics/js-intro/js-intro.component';
import { JsVariablesComponent } from './jsTopics/js-variables/js-variables.component';
import { JsCodeComponent } from './jsTopics/js-code/js-code.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent,
    ScssComponent,
    CssComponent,
    TypescriptComponent,
    JsIntroComponent,
    JsVariablesComponent,
    JsCodeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
