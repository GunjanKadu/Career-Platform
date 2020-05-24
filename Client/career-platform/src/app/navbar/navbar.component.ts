import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService, User } from "./authenticationService";
import { Store } from "@ngrx/store";

import * as Action from "../redux/actions/action";
import { RootState } from "../redux";
import { IUser, IState } from "../redux/types/authenticationTypes";

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
  @ViewChild("loginModalToggle", { static: false }) loginModalToggle: ElementRef;
  // prettier-ignore
  @ViewChild("closeSignUpModal", { static: false })closeSignUpModal: ElementRef;

  public firstName: string;
  public lastName: string;
  public email: string;
  public userName: string;
  public password: string;
  public error: string = null;
  public isLoading: boolean;
  public user: IState = null;

  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<RootState>
  ) {}

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((state: IState) => (this.user = state));
  }

  onSubmitLogin() {
    this.userName = this.loginFormData.value.username;
    this.password = this.loginFormData.value.password;
    this.isLoading = true;

    const user: User = {
      username: this.userName,
      password: this.password,
    };

    this.authenticationService.loginService(user).subscribe(
      (response: any) => {
        this.store.dispatch(new Action.AddToken(response));
        this.isLoading = false;
        this.closeLoginModal.nativeElement.click();
        this.authenticationService
          .fetchSingleUser(this.userName)
          .subscribe((user: IUser) =>
            this.store.dispatch(new Action.AddUser(user))
          );
        console.log(response);
        this.loginFormData.reset();
      },
      (error: any) => {
        this.isLoading = false;
        this.error = "Invalid UserName Or Password";
      }
    );
  }

  onSubmitSignup() {
    this.firstName = this.signUpFormData.value.firstName;
    this.lastName = this.signUpFormData.value.lastName;
    this.password = this.signUpFormData.value.signUpPassword;
    this.email = this.signUpFormData.value.email;
    this.isLoading = true;

    const user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    setTimeout(() => {
      this.authenticationService.signupService(user).subscribe(
        (res: IUser) => {
          this.signUpFormData.reset();
          this.closeSignUpModal.nativeElement.click();
          this.loginModalToggle.nativeElement.click();
          this.isLoading = false;
          this.store.dispatch(new Action.AddUser(res));
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
  onLogout() {
    console.log("logout");
    this.store.dispatch(new Action.Logout());
  }
}
