import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JsIntroComponent } from './jsTopics/js-intro/js-intro.component';
import { JsVariablesComponent } from './jsTopics/js-variables/js-variables.component';
import { JsCodeComponent } from './jsTopics/js-code/js-code.component';

// Matrial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Javascript Topics
import { JsOperatorsComponent } from './jsTopics/js-operators/js-operators.component';
import { JsTliteralsComponent } from './jsTopics/js-tliterals/js-tliterals.component';
import { JsConversionComponent } from './jsTopics/js-conversion/js-conversion.component';
import { JsHelloComponent } from './jsTopics/js-hello/js-hello.component';
import { JsIfelseComponent } from './jsTopics/js-ifelse/js-ifelse.component';
import { JsSwitchComponent } from './jsTopics/js-switch/js-switch.component';
import { JsTruefalseComponent } from './jsTopics/js-truefalse/js-truefalse.component';
import { JsEqualityComponent } from './jsTopics/js-equality/js-equality.component';
import { JsPromptComponent } from './jsTopics/js-prompt/js-prompt.component';
import { JsBooleanComponent } from './jsTopics/js-boolean/js-boolean.component';
import { JsStateexprComponent } from './jsTopics/js-stateexpr/js-stateexpr.component';
import { JsStrictComponent } from './jsTopics/js-strict/js-strict.component';
import { JsFunctionComponent } from './jsTopics/js-function/js-function.component';
import { JsArrayComponent } from './jsTopics/js-array/js-array.component';

// Css Topics
import { CssHelloComponent } from './cssTopics/css-hello/css-hello.component';

// Angular Topics
import { NgHelloComponent } from './ngTopics/ng-hello/ng-hello.component';
import { NgIntroComponent } from './ngTopics/ng-intro/ng-intro.component';

// Components
import { TopicMenuComponent } from './components/topic-menu/topic-menu.component';
import { PoopupHeaderComponent } from './components/poopup-header/poopup-header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListTagComponent } from './components/list-tag/list-tag.component';
import { TableTagComponent } from './components/table-tag/table-tag.component';
import { CssIntroComponent } from './cssTopics/css-intro/css-intro.component';
import { CssCodeComponent } from './cssTopics/css-code/css-code.component';

// Source
import { SourseHelloComponent } from './source/sourse-hello/sourse-hello.component';
import { SourceSplitComponent } from './source/source-split/source-split.component';
import { SourceCodeComponent } from './source/source-code/source-code.component';
import { SourceHistorybackComponent } from './source/source-historyback/source-historyback.component';
import { JsAdvIntroComponent } from './jsTopics/js-adv-intro/js-adv-intro.component';

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
    TopicMenuComponent,
    PoopupHeaderComponent,
    NgHelloComponent,
    NgIntroComponent,
    TasksComponent,
    ListTagComponent,
    TableTagComponent,
    CssIntroComponent,
    CssCodeComponent,
    SourseHelloComponent,
    SourceSplitComponent,
    SourceCodeComponent,
    SourceHistorybackComponent,
    JsAdvIntroComponent,
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
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
