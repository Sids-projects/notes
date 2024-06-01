import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsIntroComponent } from './jsTopics/js-intro/js-intro.component';
import { JsVariablesComponent } from './jsTopics/js-variables/js-variables.component';
import { JsCodeComponent } from './jsTopics/js-code/js-code.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Javascript Topics
import { JsOperatorsComponent } from './jsTopics/js-operators/js-operators.component';
import { JsTliteralsComponent } from './jsTopics/js-tliterals/js-tliterals.component';
import { JsConversionComponent } from './jsTopics/js-conversion/js-conversion.component';
import { JsHelloComponent } from './jsTopics/js-hello/js-hello.component';
import { JsIfelseComponent } from './jsTopics/js-ifelse/js-ifelse.component';
import { JsSwitchComponent } from './jsTopics/js-switch/js-switch.component';
import { JsTruefalseComponent } from './jsTopics/js-truefalse/js-truefalse.component';
import { JsEqualityComponent } from './jsTopics/js-equality/js-equality.component';
import { CssHelloComponent } from './cssTopics/css-hello/css-hello.component';
import { JsPromptComponent } from './jsTopics/js-prompt/js-prompt.component';
import { JsBooleanComponent } from './jsTopics/js-boolean/js-boolean.component';
import { JsStateexprComponent } from './jsTopics/js-stateexpr/js-stateexpr.component';

// Matrial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JsStrictComponent } from './jsTopics/js-strict/js-strict.component';
import { JsFunctionComponent } from './jsTopics/js-function/js-function.component';
import { JsArrayComponent } from './jsTopics/js-array/js-array.component';

@NgModule({
  declarations: [
    AppComponent,
    JsIntroComponent,
    JsVariablesComponent,
    JsCodeComponent,
    JsOperatorsComponent,
    JsTliteralsComponent,
    JsConversionComponent,
    JsHelloComponent,
    JsIfelseComponent,
    JsSwitchComponent,
    JsTruefalseComponent,
    JsEqualityComponent,
    CssHelloComponent,
    JsPromptComponent,
    JsBooleanComponent,
    JsStateexprComponent,
    JsStrictComponent,
    JsFunctionComponent,
    JsArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
