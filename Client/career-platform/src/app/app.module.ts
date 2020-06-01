import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RatingModule } from "ng-starrating";
import { environment } from "src/environments/environment.prod";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SpinnerComponent } from "./navbar/spinner/spinner.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./home/home.component";
import { rootReducer } from "./redux";
import { TrendingComponent } from "./home/trending/trending.component";
import { CurrentComponent } from "./home/current/current.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursedescComponent } from "./courses/coursedesc/coursedesc.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    HomeComponent,
    TrendingComponent,
    CurrentComponent,
    CoursesComponent,
    CoursedescComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
