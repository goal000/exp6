import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaacultyComponent } from './faaculty/faaculty.component';
import { StudentComponent } from './student/student.component';
FaacultyComponent;
StudentComponent;
const routes: Routes = [
  {path:'faaculty-component',component:FaacultyComponent},
  {path:'student-component',component:StudentComponent},
  {path:'',redirectTo:'/faaculty-component',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
