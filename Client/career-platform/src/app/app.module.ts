import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SpinnerComponent } from "./navbar/spinner/spinner.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    HomeComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
