import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';



@NgModule({
  declarations: [
    TodoDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoDashboardComponent
  ]
})
export class TodoDashboardModule { }
