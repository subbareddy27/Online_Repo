import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { CrudComponent } from './crud/crud.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CoursesComponent } from './decorator/courses/courses.component';
import { HeadersComponent } from './decorator/headers/headers.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    DataBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgforComponent,
    CrudComponent,
    NgForComponent,
    CoursesComponent,
    HeaderComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
