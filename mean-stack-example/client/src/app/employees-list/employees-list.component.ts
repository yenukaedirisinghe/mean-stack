import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
 selector: 'app-employees-list',
 template: `
 <app-nav-bar> </app-nav-bar>
 <div class="hero">
 <img src="https://img.freepik.com/premium-photo/cricket-stadium-with-ball-lights-flashes-3d-render_3544-1285.jpg?w=2000">
 <div class="hero-content">
     <h1>Welcome to Our Website</h1>
     <button [routerLink]="['match']">Book Tikets</button>
 </div>
</div>
   <h2 class="text-center m-5">Employees List</h2>
   <div class="container-md">
   <table class="table table-striped table-bordered">
       <thead>
           <tr>
               <th>Name</th>
               <th>Position</th>
               <th>Level</th>
               <th>Action</th>
           </tr>
       </thead>
 
       <tbody>
           <tr *ngFor="let employee of employees$ | async">
               <td>{{employee.name}}</td>
               <td>{{employee.position}}</td>
               <td>{{employee.level}}</td>
               <td>
                   <button class="btn btn-primary me-1" [routerLink]="['edit/', employee._id]">Edit</button>
                   <button class="btn btn-danger" (click)="deleteEmployee(employee._id || '')">Delete</button>
               </td>
           </tr>
       </tbody>
   </table>
  
  
   </div>
   <app-footer></app-footer>
 `,
  styles: [`.hero {
    display: flex;
    align-items: center;
    height: 500px;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #f8f9fa;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 20px;
}

.hero-content button {
    padding: 10px 20px;
    background-color: white;
    color: #B2BEB5;
    border: none;
    font-size: 2.2rem;
    cursor: pointer;
    border-radius: 80px;
}

  `
  ]
})
export class EmployeesListComponent implements OnInit {
 employees$: Observable<Employee[]> = new Observable();
 
 constructor(private employeesService: EmployeeService) { }
 
 ngOnInit(): void {
   this.fetchEmployees();
 }
 
 deleteEmployee(id: string): void {
   this.employeesService.deleteEmployee(id).subscribe({
     next: () => this.fetchEmployees()
   });
 }
 
 private fetchEmployees(): void {
   this.employees$ = this.employeesService.getEmployees();
 }
}
