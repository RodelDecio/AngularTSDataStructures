import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent} from "./components/studentlist/studentlist.component";

export const routes: Routes = [
  {
    title: 'Student List',
    component: StudentListComponent,
    path: 'studentlist',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
