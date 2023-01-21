import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; // <-- add this line
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'; // <-- add this line
import { StadiumComponent } from './stadium/stadium.component';
import {LoginComponent  } from './login/login.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: EmployeesListComponent },
 //{ path: 'employees/new', component: AddEmployeeComponent }, // <-- add this line
 { path: 'home/new', component: StadiumComponent },
 //{ path: 'employees/new', component: LoginComponent },
 { path: 'login', component: LoginComponent},
 { path: 'employees/edit/:id', component: EditEmployeeComponent }]; // <-- add this line

 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }