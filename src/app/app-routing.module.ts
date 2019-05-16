import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-task',
    pathMatch: 'full'
  },
  {
    path: 'view-task',
    component: ViewTaskComponent
  },
  {
    path: 'edit-task/:id',
    component: EditTaskComponent
  }, 
  {
    path: 'add-task',
    component: AddTaskComponent
  },
  {
    path: '**',
    component: ViewTaskComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
