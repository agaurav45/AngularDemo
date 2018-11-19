import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ViewEmployeeComponent } from './components/view/view.employee.component';
import { AddEmployeeComponent } from './components/add/add.employee.component';
import { EditEmployeeComponent } from './components/edit/edit.employee.component';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent, ViewEmployeeComponent, AddEmployeeComponent, EditEmployeeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
