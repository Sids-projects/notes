import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsIntroComponent } from './jsTopics/js-intro/js-intro.component';
import { JsVariablesComponent } from './jsTopics/js-variables/js-variables.component';
import { JsCodeComponent } from './jsTopics/js-code/js-code.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsOperatorsComponent } from './jsTopics/js-operators/js-operators.component';
import { JsTliteralsComponent } from './jsTopics/js-tliterals/js-tliterals.component';
import { JsConversionComponent } from './jsTopics/js-conversion/js-conversion.component';

// Matrial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { JsHelloComponent } from './jsTopics/js-hello/js-hello.component';
import { JsIfelseComponent } from './jsTopics/js-ifelse/js-ifelse.component';
import { JsSwitchComponent } from './jsTopics/js-switch/js-switch.component';
import { JsTruefalseComponent } from './jsTopics/js-truefalse/js-truefalse.component';
import { JsEqualityComponent } from './jsTopics/js-equality/js-equality.component';
import { CssHelloComponent } from './cssTopics/css-hello/css-hello.component';
import { JsPromptComponent } from './jsTopics/js-prompt/js-prompt.component';
import { JsBooleanComponent } from './jsTopics/js-boolean/js-boolean.component';
import { JsStateexprComponent } from './jsTopics/js-stateexpr/js-stateexpr.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
