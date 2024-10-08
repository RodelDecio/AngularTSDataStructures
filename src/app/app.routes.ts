import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent} from "./components/studentlist/studentlist.component";
import {EmployeeListComponent} from "./components/employeelist/employeelist.component";
import {CourselistComponent} from "./components/courselist/courselist.component";
import {BookListComponent} from "./components/booklist/booklist.component";

export const routes: Routes = [
  {
    title: 'Student List',
    component: StudentListComponent,
    path: 'studentlist',
  },
  {
    title: 'Employee List',
    component: EmployeeListComponent,
    path: 'employeelist',
  },
  {
    title: 'Course List',
    component: CourselistComponent,
    path: 'courselist',
  },
  {
    title: 'Book List',
    component: BookListComponent,
    path: 'booklist',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
