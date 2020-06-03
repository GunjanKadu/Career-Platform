import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootState } from "../redux";
import { IState } from "../redux/types/authenticationTypes";
import { ICourses } from "../models/models";
import { AuthenticationService } from "../navbar/authenticationService";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<RootState>,
    private authenticationService: AuthenticationService
  ) {}
  public user: IState;

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((state: IState) => (this.user = state));
    this.authenticationService.fetchSingleUserandUpdateState(this.user.user.id);
  }
}
