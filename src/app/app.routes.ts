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
import {PhoneListComponent} from "./components/phonelist/phonelist.component";
import {MusicPlaylistComponent} from "./components/musicplaylist/musicplaylist.component";
import {FoodMenuComponent} from "./components/foodmenu/foodmenu.component";
import {GroceryListComponent} from "./components/grocerylist/grocerylist.component";
import {ClassroomListComponent} from "./components/classroomlist/classroomlist.component";
import {InventoryListComponent} from "./components/inventorylist/inventorylist.component";
import {LectureListComponent} from "./components/lecturelist/lecturelist.component";
import {StationeryListComponent} from "./components/stationerylist/stationerylist.component";


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
  {
    title: 'Phone List',
    component: PhoneListComponent,
    path: 'phonelist',
  },
  {
    title: 'Musicplay List',
    component: MusicPlaylistComponent,
    path: 'musicplaylist',
  },
  {
    title: 'Food Menu List',
    component: FoodMenuComponent,
    path: 'foodmenulist',
  },
  {
    title: 'Grocery List',
    component: GroceryListComponent,
    path: 'grocerylist',
  },
  {
    title: 'Classroom List',
    component: ClassroomListComponent,
    path: 'classroomlist',
  },
  {
    title: 'Classroom List',
    component: InventoryListComponent,
    path: 'classroomlist',
  },
  {
    title: 'Lecture List',
    component: LectureListComponent,
    path: 'lecturelist',
  },
  {
    title: 'Stationery List',
    component: StationeryListComponent,
    path: 'stationerylist',
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
