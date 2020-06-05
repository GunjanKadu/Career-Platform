import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootState } from "./redux";
import { IState } from "./redux/types/authenticationTypes";

@Injectable()
export class AuthGuard implements CanActivate {
  private user: IState;

  constructor(private router: Router, private store: Store<RootState>) {
    this.store
      .select("authentication")
      .subscribe((user: IState) => (this.user = user));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    const userToken = sessionStorage.getItem("token");
    if (userToken && this.user && this.user.user.role === "ROLE_INSTRUCTOR") {
      return true;
    } else {
      this.router.navigate(["/"]);
      //return true;
    }
  }
}
