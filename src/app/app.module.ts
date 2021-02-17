import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

import { AssignmentComponent } from './assignment/assignment.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AssignmentComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
