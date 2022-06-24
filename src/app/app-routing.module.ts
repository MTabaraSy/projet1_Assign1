import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ClasseComponent } from './Components/classe/classe.component';
import { StudentsComponent } from './Components/students/students.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addClass",
    component:ClasseComponent
  },
  {
    path:"addStudent",
    component:StudentsComponent
  },
  {
    path:'', redirectTo:'home',pathMatch:'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
