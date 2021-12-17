import { CRUDAss5Component } from './assignment/crud-ass5/crud-ass5.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from "./assignment/assignment1/assignment1.component";
import { Assignment2Component } from "./assignment/assignment2/assignment2.component";
import { Assignment3Component } from './assignment/assignment3/assignment3.component';
import { Assignment4Component } from './assignment/assignment4/assignment4.component';
import { Assignment5Component } from './assignment/assignment5/assignment5.component';
import { UpdateEmpComponent } from "./assignment/crud-ass5/update-emp/update-emp.component";
const routes: Routes = [
  {
    path: 'Assignment1',
    component: Assignment1Component,
    // pathMatch: "full"
  },

  {
    path: 'Assignment2',
    component: Assignment2Component
  },

  {
    path: 'Assignment3',
    component: Assignment3Component
  },

  {
    path: 'Assignment4',
    component: Assignment4Component
  },

  {
    path: 'Assignment5',
    component: Assignment5Component
  },
  {
    path: 'CRUD-Assignment5',
    component: CRUDAss5Component
  },
  {
    path: 'update/:id',
    component: UpdateEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
