import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursedescComponent } from "./courses/coursedesc/coursedesc.component";
import { CreatecourseComponent } from "./createcourse/createcourse.component";
import { AuthGuard } from "./auth.guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "courses", component: CoursesComponent },
  { path: "courses/:courseName", component: CoursesComponent },
  {
    path: "courses/createdCourses/:token",
    component: CoursesComponent,
  },
  { path: "course/:courseName/:id", component: CoursedescComponent },
  {
    path: "createcourse",
    canActivate: [AuthGuard],
    component: CreatecourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
