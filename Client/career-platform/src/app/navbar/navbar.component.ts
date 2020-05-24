import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authenticationService";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @ViewChild("loginFormData", { static: false }) loginFormData: NgForm;
  @ViewChild("signUpFormData", { static: false }) signUpFormData: NgForm;
  @ViewChild("closeModal", { static: false }) closeModal: ElementRef;

  public firstName: string;
  public lastName: string;
  public email: string;
  public userName: string;
  public password: string;
  public error: string = null;
  public isLoading: boolean;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.userName = this.loginFormData.value.username;
    this.password = this.loginFormData.value.password;
    this.isLoading = true;

    setTimeout(
      () =>
        this.authenticationService
          .loginService(this.userName, this.password)
          .subscribe(
            (response: any) => {
              this.loginFormData.reset();
              this.isLoading = false;
              this.closeModal.nativeElement.click();
              console.log(response);
            },
            (error: any) => {
              this.isLoading = false;
              this.error = "Invalid UserName Or Password";
              setTimeout(() => (this.error = null), 2500);
            }
          ),
      1000
    );
  }

  onSubmitSignup() {
    this.firstName = this.signUpFormData.value.firstName;
    this.lastName = this.signUpFormData.value.lastName;
    this.password = this.signUpFormData.value.signUpPassword;
    this.email = this.signUpFormData.value.email;
    this.isLoading = true;

    console.log(this.signUpFormData);
  }
}
