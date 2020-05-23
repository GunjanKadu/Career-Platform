import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  loginService(username: string, password: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      "http://localhost:8080/api/login",
      {
        userName: username,
        passwordString: password,
      },
      { headers, responseType: "text" }
    );
  }
}
