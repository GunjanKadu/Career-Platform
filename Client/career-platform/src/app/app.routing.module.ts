import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "courses", component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
