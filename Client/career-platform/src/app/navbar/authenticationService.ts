import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import * as URL from "../url";
import { IUser } from "../redux/types/authenticationTypes";
import { Store } from "@ngrx/store";
import { RootState } from "../redux";
import * as Action from "../redux/actions/action";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor(private http: HttpClient, private store: Store<RootState>) {}

  loginService(user: User) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      URL.LOGIN,
      {
        userName: user.username,
        passwordString: user.password,
      },
      { headers, responseType: "text" }
    );
  }

  fetchSingleUser(userName: string) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<IUser>(URL.FETCHUSER + userName, { headers });
  }
  fetchSingleUserandUpdateState(id: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get<IUser>(URL.FETCHUSER + id, { headers })
      .subscribe((user: IUser) =>
        this.store.dispatch(new Action.AddUser(user))
      );
  }

  signupService(user: User) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post<IUser>(
      URL.SIGNUP,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
      },
      { headers }
    );
  }
  postUserDetailsBasic(user: IUser) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<IUser>(URL.POSTUSERDETAILSBASIC + user.id, user, {
      headers,
    });
  }
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  username?: string;
  description?: string;
  social?: string;
}
