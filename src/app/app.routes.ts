import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent} from "./components/studentlist/studentlist.component";
import {EmployeeListComponent} from "./components/employeelist/employeelist.component";
import {FruitListComponent} from "./components/fruitlist/fruitlist.component";
import {CourselistComponent} from "./components/courselist/courselist.component";
import {BookListComponent} from "./components/booklist/booklist.component";
import {CityListComponent} from "./components/citylist/citylist.component";
import {MovieListComponent} from "./components/movielist/movielist.component";
import {CarModelListComponent} from "./components/carmodellist/carmodellist.component";
import {ProductListComponent} from "./components/productlist/productlist.component";
import {SubjectListComponent} from "./components/subjectlist/subjectlist.component";
import {SportsListComponent} from "./components/sportlist/sportlist.component";
import {VegetableListComponent} from "./components/vegetablelist/vegetablelist.component";
import {AnimalListComponent} from "./components/animallist/animallist.component";
import {ToolListComponent} from "./components/toollist/toollist.component";
import {LanguageListComponent} from "./components/languagelist/languagelist.component";
import {GameListComponent} from "./components/gamelist/gamelist.component";
import {SoftwareListComponent} from "./components/softwarelist/softwarelist.component";

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
    title: 'Fruit List',
    component: FruitListComponent,
    path: 'fruitlist',
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
  {
    title: 'City List',
    component: CityListComponent,
    path: 'citylist',
  },
  {
    title: 'Movie List',
    component: MovieListComponent,
    path: 'movielist',
  },
  {
    title: 'Car Model List',
    component: CarModelListComponent,
    path: 'carmodellist',
  },
  {
    title: 'Product List',
    component: ProductListComponent,
    path: 'productlist',
  },
  {
    title: 'Subject List',
    component: SubjectListComponent,
    path: 'subjectlist',
  },
  {
    title: 'Country List',
    component: CourselistComponent,
    path: 'countrylist',
  },
  {
    title: 'Sports List',
    component: SportsListComponent,
    path: 'sportslist',
  },
  {
    title: 'Vegetable List',
    component: VegetableListComponent,
    path: 'vegetablelist',
  },
  {
    title: 'Animal List',
    component: AnimalListComponent,
    path: 'animallist',
  },
  {
    title: 'Tool List',
    component: ToolListComponent,
    path: 'toollist',
  },
  {
    title: 'Language List',
    component: LanguageListComponent,
    path: 'languagelist',
  },
  {
    title: 'Game List',
    component: GameListComponent,
    path: 'gamelist',
  },
  {
    title: 'Software List',
    component: SoftwareListComponent,
    path: 'softwarelist',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
