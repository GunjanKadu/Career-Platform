import { Component, OnInit } from "@angular/core";
import { CourseserviceService } from "./courseservice.service";
import { ICourses } from "../models/models";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CourseserviceService) {}

  public courses: Array<ICourses>;

  public lecture: any;

  ngOnInit() {
    this.courseService
      .fetchAllCourses()
      .subscribe((courses: Array<ICourses>) => (this.courses = courses));
  }
  identity(index: number, course: ICourses) {
    return course.id;
  }
}
