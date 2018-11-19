import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ViewEmployeeComponent } from './components/view/view.employee.component';
import { AddEmployeeComponent } from './components/add/add.employee.component';
import { EditEmployeeComponent } from './components/edit/edit.employee.component';

const routes: Routes = [
  { path: 'employees', component: ViewEmployeeComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: '**', redirectTo: '/employees' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
