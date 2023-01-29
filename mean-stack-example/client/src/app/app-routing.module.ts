import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; // <-- add this line
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'; // <-- add this line
import { StadiumComponent } from './stadium/stadium.component';
import {LoginComponent  } from './login/login.component';
import {RegisterComponent  } from './register/register.component';
import {MatchListComponent  } from './match-list/match-list.component';


const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'login', redirectTo: 'home/login', pathMatch: 'full' },
 { path: 'home', redirectTo: 'home' },
 { path: 'home', component: EmployeesListComponent },
 { path: 'home/match/home', redirectTo: 'home/login', pathMatch: 'full'  },
 //{ path: 'employees/new', component: AddEmployeeComponent }, // <-- add this line
 //{ path: 'home/new', component: StadiumComponent },
 { path: 'home/match', component: MatchListComponent },
 { path: 'home/match/ground', component: StadiumComponent },
 //{ path: 'employees/new', component: LoginComponent },
 { path: 'home/login', component: LoginComponent},
 { path: 'home/login/register', component: RegisterComponent},
 { path: 'employees/edit/:id', component: EditEmployeeComponent }]; // <-- add this line


 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }