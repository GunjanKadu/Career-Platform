import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  loginService(user: User) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      "http://localhost:8080/api/login",
      {
        userName: user.username,
        passwordString: user.password,
      },
      { headers, responseType: "text" }
    );
  }

  signupService(user: User) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      "http://localhost:8080/api/signin",
      {
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
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
