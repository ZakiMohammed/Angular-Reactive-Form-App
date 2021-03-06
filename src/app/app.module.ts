import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { CompareDirective } from './directives/compare.directive';
import { ReactBasicComponent } from './components/react/react-basic/react-basic.component';
import { ReactSpgComponent } from './components/react/react-spg/react-spg.component';
import { ReactBuilderComponent } from './components/react/react-builder/react-builder.component';
import { ReactValidComponent } from './components/react/react-valid/react-valid.component';
import { ReactValidDynamicComponent } from './components/react/react-valid-dynamic/react-valid-dynamic.component';
import { ReactValidCustomComponent } from './components/react/react-valid-custom/react-valid-custom.component';
import { ReactCrossComponent } from './components/react/react-cross/react-cross.component';
import { ReactChangeComponent } from './components/react/react-change/react-change.component';
import { ReactChangeValidationComponent } from './components/react/react-change-validation/react-change-validation.component';
import { ReactArrayComponent } from './components/react/react-array/react-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    CompareDirective,
    ReactBasicComponent,
    ReactSpgComponent,
    ReactBuilderComponent,
    ReactValidComponent,
    ReactValidDynamicComponent,
    ReactValidCustomComponent,
    ReactCrossComponent,
    ReactChangeComponent,
    ReactChangeValidationComponent,
    ReactArrayComponent    
  ],
  imports: [
    BrowserModule,   
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "template", component: TemplateComponent },
      { path: "react", component: ReactBasicComponent },
      { path: "react/basic", component: ReactBasicComponent },
      { path: "react/spg", component: ReactSpgComponent },
      { path: "react/builder", component: ReactBuilderComponent },
      { path: "react/valid", component: ReactValidComponent },
      { path: "react/valid-dynamic", component: ReactValidDynamicComponent },
      { path: "react/valid-custom", component: ReactValidCustomComponent },
      { path: "react/valid-cross", component: ReactCrossComponent },
      { path: "react/change", component: ReactChangeComponent },
      { path: "react/change-validate", component: ReactChangeValidationComponent },
      { path: "react/array", component: ReactArrayComponent },
      { path: "**", component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
