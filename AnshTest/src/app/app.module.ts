import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ViewEmployeeComponent } from './components/view/view.employee.component';
import { AddEmployeeComponent } from './components/add/add.employee.component';
import { EditEmployeeComponent } from './components/edit/edit.employee.component';
import { EmployeeService } from './services/employee.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent, ViewEmployeeComponent, AddEmployeeComponent, EditEmployeeComponent, SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
