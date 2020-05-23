import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @ViewChild("formData", { static: true }) signUpForm: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmitLogin() {
    console.log(this.signUpForm);
  }
}
