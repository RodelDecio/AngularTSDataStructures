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
import {DestinationListComponent} from "./components/destinationlist/destinationlist.component";
import {LaptopListComponent} from "./components/laptoplist/laptoplist.component";
import {
  LaptopSpecificationsListComponent
} from "./components/laptopspecificationslist/laptopspecificationslist.component";
import {ComputerHardwareListComponent} from "./components/computerhardwarelist/computerhardwarelist.component";
import {MobileAppListComponent} from "./components/mobileapplist/mobileapplist.component";
import {VideoListComponent} from "./components/videolist/videolist.component";
import {TVShowListComponent} from "./components/tvshowlist/tvshowlist.component";
import {FurnitureListComponent} from "./components/furniturelist/furniturelist.component";
import {AccessoryListComponent} from "./components/accessorylist/accessorylist.component";
import {BuildingListComponent} from "./components/buildinglist/buildinglist.component";
import {PaintingListComponent} from "./components/paintinglist/paintinglist.component";
import {ArtistListComponent} from "./components/artistlist/artistlist.component";
import {ComposerListComponent} from "./components/composerlist/composerlist.component";
import {PodcastListComponent} from "./components/podcastlist/podcastlist.component";
import {ExerciseListComponent} from "./components/exerciselist/exerciselist.component";
import {MealPlanListComponent} from "./components/mealplanlist/mealplanlist.component";

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
  {path: 'destinationlist', component: DestinationListComponent},
  {path: 'laptoplist', component: LaptopListComponent},
  {path: 'laptopspecificationslist', component: LaptopSpecificationsListComponent},
  {path: 'computerhardwarelist', component: ComputerHardwareListComponent},
  {path: 'mobileapplist', component: MobileAppListComponent},
  {path: 'videolist', component: VideoListComponent},
  {path: 'tvshowlist', component: TVShowListComponent},
  {path: 'furniturelist', component: FurnitureListComponent},
  {path: 'accessorylist', component: AccessoryListComponent},
  {path: 'buildinglist', component: BuildingListComponent},
  {path: 'paintinglist', component: PaintingListComponent},
  {path: 'artistlist', component: ArtistListComponent},
  {path: 'composerlist', component: ComposerListComponent},
  {path: 'podcastlist', component: PodcastListComponent},
  {path: 'exerciselist', component: ExerciseListComponent},
  {path: 'mealplanlist', component: MealPlanListComponent},



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
    DestinationListComponent,
    LaptopListComponent,
    LaptopSpecificationsListComponent,
    ComputerHardwareListComponent,
    MobileAppListComponent,
    VideoListComponent,
    TVShowListComponent,
    FurnitureListComponent,
    AccessoryListComponent,
    BuildingListComponent,
    PaintingListComponent,
    ArtistListComponent,
    ComposerListComponent,
    PodcastListComponent,
    ExerciseListComponent,
    MealPlanListComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent

  ]

})

export class AppModule {}
