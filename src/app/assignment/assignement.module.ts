import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
// import { LoginComponent } from "../login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';
import { StringConverterPipe } from './assignment3/pipe/string-converter.pipe';
import { TempConverterPipe } from './assignment3/pipe/temp-converter.pipe';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { HttpClientModule } from '@angular/common/http';
import { CRUDAss5Component } from './crud-ass5/crud-ass5.component';
import { UpdateEmpComponent } from './crud-ass5/update-emp/update-emp.component';
import { ChildComponent } from './child/child.component';
import { ImpurePipePipe } from './assignment3/pipe/impure-pipe.pipe';
import { PurePipePipe } from './assignment3/pipe/pure-pipe.pipe';
import { FilterPipePipe } from './assignment3/pipe/filter-pipe.pipe';

@NgModule({
  declarations: [
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    StringConverterPipe,
    TempConverterPipe,
    Assignment4Component,
    Assignment5Component,
    CRUDAss5Component,
    UpdateEmpComponent,
    ChildComponent,
    ImpurePipePipe,
    PurePipePipe,
    FilterPipePipe,
    // LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    Assignment5Component,
  ],
})
export class AssignementModule {}
