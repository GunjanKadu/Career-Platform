import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService, User } from "./authenticationService";
import { Store } from "@ngrx/store";

import * as Action from "../redux/actions/action";
import { RootState } from "../redux";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @ViewChild("loginFormData", { static: false }) loginFormData: NgForm;
  @ViewChild("signUpFormData", { static: false }) signUpFormData: NgForm;
  @ViewChild("closeLoginModal", { static: false }) closeLoginModal: ElementRef;
  // prettier-ignore
  @ViewChild("closeSignUpModal", { static: false }) closeSignUpModal: ElementRef;

  public firstName: string;
  public lastName: string;
  public email: string;
  public userName: string;
  public password: string;
  public error: string = null;
  public isLoading: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<RootState>
  ) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.userName = this.loginFormData.value.username;
    this.password = this.loginFormData.value.password;
    this.isLoading = true;

    const user: User = {
      username: this.userName,
      password: this.password,
    };

    setTimeout(
      () =>
        this.authenticationService.loginService(user).subscribe(
          (response: any) => {
            this.loginFormData.reset();
            this.isLoading = false;
            this.closeLoginModal.nativeElement.click();
            this.store.dispatch(new Action.AddToken(response));
            console.log(response);
          },
          (error: any) => {
            this.isLoading = false;
            this.error = "Invalid UserName Or Password";
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

    const user: User = {
      firstName: this.userName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    setTimeout(() => {
      this.authenticationService.signupService(user).subscribe(
        (res) => {
          this.signUpFormData.reset();
          this.closeSignUpModal.nativeElement.click();
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          // tslint:disable-next-line: max-line-length
          err.error.message === "UserName Already Exists"
            ? (this.error = "Email already exists please try to login.")
            : (this.error = err.error.message);
        }
      );
    }, 1000);
  }
  disableError() {
    this.error = null;
  }
}
