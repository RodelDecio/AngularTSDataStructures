import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from "./components/studentlist/studentlist.component";
import {EmployeeListComponent} from "./components/employeelist/employeelist.component";
import {FruitListComponent} from "./components/fruitlist/fruitlist.component";
import {CourseListComponent} from "./components/courselist/courselist.component.spec";
import {BookListComponent} from "./components/booklist/booklist.component";
import {CityListComponent} from "./components/citylist/citylist.component";
import {MovieListComponent} from "./components/movielist/movielist.component";
import {CarModelListComponent} from "./components/carmodellist/carmodellist.component";
import {ProductListComponent} from "./components/productlist/productlist.component";
import {SubjectListComponent} from "./components/subjectlist/subjectlist.component";
import {CountryListComponent} from "./components/countrylist/countrylist.component";
import {SportListComponent} from "./components/sportlist/sportlist.component";
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
import {FlowerListComponent} from "./components/flowerlist/flowerlist.component";

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'fruitlist', component: FruitListComponent},
  {path: 'courselist', component: CourseListComponent},
  {path: 'booklist', component: BookListComponent},
  {path: 'citylist', component: CityListComponent},
  {path: 'movielist', component: MovieListComponent},
  {path: 'carmodellist', component: CarModelListComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'subjectlist', component: SubjectListComponent},
  {path: 'countrylist', component: CountryListComponent},
  {path: 'sportlist', component: SportListComponent},
  {path: 'vegetablelist', component: VegetableListComponent},
  {path: 'animallist', component: AnimalListComponent},
  {path: 'toollist', component: ToolListComponent},
  {path: 'languagelist', component: LanguageListComponent},
  {path: 'gamelist', component: GameListComponent},
  {path: 'softwarelist', component: SoftwareListComponent},
  {path: 'phonelist', component: PhoneListComponent},
  {path: 'musicplaylist', component: MusicPlaylistComponent},
  {path: 'foodmenu', component: FoodMenuComponent},
  {path: 'grocerylist', component: GroceryListComponent},
  {path: 'classroomlist', component: ClassroomListComponent},
  {path: 'inventorylist', component: InventoryListComponent},
  {path: 'lecturelist', component: LectureListComponent},
  {path: 'stationerylist', component: StationeryListComponent},
  {path: 'flowerlist', component: FlowerListComponent},



]

@NgModule ({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,

  ],

  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
    BookListComponent,
    CityListComponent,
    MovieListComponent,
    CarModelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportListComponent,
    VegetableListComponent,
    AnimalListComponent,
    ToolListComponent,
    LanguageListComponent,
    GameListComponent,
    SoftwareListComponent,
    PhoneListComponent,
    MusicPlaylistComponent,
    FoodMenuComponent,
    GroceryListComponent,
    ClassroomListComponent,
    InventoryListComponent,
    LectureListComponent,
    StationeryListComponent,
    FlowerListComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent

  ]

})

export class AppModule {}
