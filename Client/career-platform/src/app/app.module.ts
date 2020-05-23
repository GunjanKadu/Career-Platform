import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SpinnerComponent } from './navbar/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SpinnerComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
