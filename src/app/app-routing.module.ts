import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './screens/angular/angular.component';
import { JavascriptComponent } from './screens/javascript/javascript.component';
import { CssComponent } from './screens/css/css.component';
import { ScssComponent } from './screens/scss/scss.component';
import { TypescriptComponent } from './screens/typescript/typescript.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'css', component: CssComponent },
  { path: 'scss', component: ScssComponent },

  // Default Route
  { path: '', redirectTo: 'javascript', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
