import { Component, OnInit } from "@angular/core";

import * as jwt_decode from "jwt-decode";
import { AuthenticationService } from "./navbar/authenticationService";
import { tap } from "rxjs/operators";
import { IUser } from "./redux/types/authenticationTypes";
import { Store } from "@ngrx/store";
import { RootState } from "./redux";
import * as Action from "./redux/actions/action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<RootState>
  ) {}

  ngOnInit(): void {
    const token = jwt_decode(sessionStorage.getItem("token"));
    console.log(token);
    if (token) {
      this.authenticationService
        .fetchSingleUser(token.sub)
        .pipe(
          tap((user: IUser) => {
            this.store.dispatch(
              new Action.AddToken(sessionStorage.getItem("token"))
            );
            this.store.dispatch(new Action.AddUser(user));
          })
        )
        .subscribe((user) => user);
    }
  }
  title = "career-platform";
}
