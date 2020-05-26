import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { TRENDINGCOURSES } from "src/app/url";
import { ItrendingCourse } from "src/app/models/models";

@Injectable({ providedIn: "root" })
export class TrendingCourseService {
  constructor(private http: HttpClient) {}

  fetchTrendingCourses() {
    return this.http.get<ItrendingCourse>(TRENDINGCOURSES);
  }
}
