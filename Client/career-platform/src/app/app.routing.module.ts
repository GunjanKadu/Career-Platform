import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursedescComponent } from "./courses/coursedesc/coursedesc.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "courses", component: CoursesComponent },
  { path: "course/:courseName/:id", component: CoursedescComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
