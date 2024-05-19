import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JsIntroComponent } from './jsTopics/js-intro/js-intro.component';
import { JsVariablesComponent } from './jsTopics/js-variables/js-variables.component';
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
import { JsStrictComponent } from './jsTopics/js-strict/js-strict.component';
import { JsFunctionComponent } from './jsTopics/js-function/js-function.component';

const routes: Routes = [
  // Javascript Components
  { path: '', redirectTo: 'jsHelloComponent', pathMatch: 'full' },
  { path: 'jsHelloComponent', component: JsHelloComponent },
  { path: 'jsIntroComponent', component: JsIntroComponent },
  { path: 'jsVariablesComponent', component: JsVariablesComponent },
  { path: 'jsOperatorsComponent', component: JsOperatorsComponent },
  { path: 'jsTliteralsComponent', component: JsTliteralsComponent },
  { path: 'jsConversionComponent', component: JsConversionComponent },
  { path: 'jsIfelseComponent', component: JsIfelseComponent },
  { path: 'jsSwitchComponent', component: JsSwitchComponent },
  { path: 'jsTruefalseComponent', component: JsTruefalseComponent },
  { path: 'jsEqualityComponent', component: JsEqualityComponent },
  { path: 'jsPromptComponent', component: JsPromptComponent },
  { path: 'jsBooleanComponent', component: JsBooleanComponent },
  { path: 'jsStateexprComponent', component: JsStateexprComponent },
  { path: 'jsStrictComponent', component: JsStrictComponent },
  { path: 'jsFunctionComponent', component: JsFunctionComponent },

  // Css Components
  { path: 'cssHelloComponent', component: CssHelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
