import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { COURSES } from "../url";

@Injectable({
  providedIn: "root",
})
export class CourseserviceService {
  constructor(private http: HttpClient) {}

  fetchAllCourses() {
    return this.http.get(COURSES);
  }
}
