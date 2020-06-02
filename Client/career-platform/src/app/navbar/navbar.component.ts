import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService, User } from "./authenticationService";
import { Store } from "@ngrx/store";

import * as Action from "../redux/actions/action";
import { RootState } from "../redux";
import { IUser, IState } from "../redux/types/authenticationTypes";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @ViewChild("loginFormData", { static: false }) loginFormData: NgForm;
  @ViewChild("signUpFormData", { static: false }) signUpFormData: NgForm;
  @ViewChild("searchForm", { static: false }) searchForm: NgForm;
  // prettier-ignore
  @ViewChild("userDetailsFormData", { static: false }) userDetailsFormData: NgForm;

  @ViewChild("closeLoginModal", { static: false }) closeLoginModal: ElementRef;
  // prettier-ignore
  @ViewChild("loginModalToggle",{static:false}) loginModalToggle: ElementRef;
  // prettier-ignore
  @ViewChild("closeSignUpModal",{static:false}) closeSignUpModal: ElementRef;
  // prettier-ignore
  @ViewChild("closeUserDetailsModal", { static: false }) closeUserDetailsModal: ElementRef;

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
    private store: Store<RootState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((state: IState) => (this.user = state));
  }

  onSubmitSearch() {
    let course = this.searchForm.value.courseName;
    this.router.navigate(["/courses/", course]);
    this.searchForm.resetForm();
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
        this.loginFormData.resetForm();

        this.authenticationService
          .fetchSingleUser(this.userName)
          .pipe(
            tap((user: IUser) => this.store.dispatch(new Action.AddUser(user)))
          )
          .subscribe((user: IUser) => user);
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
      this.authenticationService
        .signupService(user)
        .pipe(tap((res: IUser) => this.store.dispatch(new Action.AddUser(res))))
        .subscribe(
          (res: IUser) => {
            this.signUpFormData.resetForm();
            this.closeSignUpModal.nativeElement.click();
            this.loginModalToggle.nativeElement.click();
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

  onUserDetailsSubmit() {
    this.isLoading = true;

    const userDetails: IUser = {
      id: this.user.user.id,
      firstName: this.userDetailsFormData.value.firstName,
      lastName: this.userDetailsFormData.value.lastName,
      password: this.userDetailsFormData.value.password,
      email: this.userDetailsFormData.value.email,
      userDetails: {
        id: this.user.user.id,
        description: this.userDetailsFormData.value.userHeadline,
        socialMedia: this.userDetailsFormData.value.userSocial,
      },
    };
    console.log(userDetails);

    setTimeout(() => {
      this.authenticationService
        .postUserDetailsBasic(userDetails)
        .pipe(tap((res: IUser) => this.store.dispatch(new Action.AddUser(res))))
        .subscribe(
          (res: IUser) => {
            this.isLoading = false;
            this.closeUserDetailsModal.nativeElement.click();
          },
          (err) => {
            this.isLoading = false;
            console.log(err);
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
  getBasicDetails(req: string) {
    if (this.user.user) {
      switch (req) {
        case "fname":
          return this.user.user.firstName;
          break;
        case "lname":
          return this.user.user.lastName;
          break;
        case "email":
          return this.user.user.email;
          break;
        case "password":
          return this.user.user.password;
          break;
        case "headline":
          if (
            this.user.user.userDetails &&
            this.user.user.userDetails.description
          ) {
            return this.user.user.userDetails.description;
          }
          break;
        case "social":
          if (
            this.user.user.userDetails &&
            this.user.user.userDetails.socialMedia
          ) {
            return this.user.user.userDetails.socialMedia;
          }
          break;
      }
    }
  }
}
