import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import * as URL from "../url";
import { IUser } from "../redux/types/authenticationTypes";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

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
    return this.http.post<IUser>(URL.FETCHUSER, userName, { headers });
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
}

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  username?: string;
}
