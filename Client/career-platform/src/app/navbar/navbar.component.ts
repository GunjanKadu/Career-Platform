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
  @ViewChild("formData", { static: true }) signUpForm: NgForm;
  @ViewChild("closeModal", { static: true }) closeModal: ElementRef;

  public userName: string;
  public password: string;
  public error: string = null;
  public isLoading: boolean;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.userName = this.signUpForm.value.username;
    this.password = this.signUpForm.value.password;
    this.isLoading = true;

    setTimeout(
      () =>
        this.authenticationService
          .loginService(this.userName, this.password)
          .subscribe(
            (response: any) => {
              this.signUpForm.reset();
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
}
