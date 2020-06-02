import { Component, OnInit } from "@angular/core";

import { CourseserviceService } from "./courseservice.service";
import { ICourses } from "../models/models";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  constructor(
    private courseService: CourseserviceService,
    private route: ActivatedRoute
  ) {}

  public courses: Array<ICourses>;
  public lecture: any;
  public searchTerm: string = null;
  public lengthOfResults: number;
  public loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.route.params.subscribe((params: Params) => {
        this.searchTerm = params["courseName"];
        this.courseService
          .fetchAllCourses()
          .subscribe((courses: Array<ICourses>) => {
            if (this.searchTerm) {
              let sortedCourses: Array<ICourses> = courses.filter((course) =>
                course.name
                  .toLowerCase()
                  .includes(this.searchTerm.toLowerCase())
              );
              this.courses = sortedCourses;
              this.lengthOfResults = sortedCourses.length;
              this.loading = false;
            } else {
              this.courses = courses;
              this.loading = false;
            }
          });
      });
    }, 1000);
  }
  identity(index: number, course: ICourses) {
    return course.id;
  }
}
