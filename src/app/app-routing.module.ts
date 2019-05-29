import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route1DepartmentComponent } from './department/department.component'
import { Route2EmployeesComponent } from './employees/employees.component'

const routes: Routes = [
  { path: 'departments', component: Route1DepartmentComponent },
  { path: 'employees',   component: Route2EmployeesComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Route1DepartmentComponent,Route2EmployeesComponent]