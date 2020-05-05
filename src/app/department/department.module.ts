import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      { path: 'employee', component: EmployeeComponent }
    ])
  ]
})
export class DepartmentModule { }
