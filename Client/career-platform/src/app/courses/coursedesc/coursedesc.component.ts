import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseserviceService } from "../courseservice.service";
import { ICourses } from "src/app/models/models";

@Component({
  selector: "app-coursedesc",
  templateUrl: "./coursedesc.component.html",
  styleUrls: ["./coursedesc.component.css"],
})
export class CoursedescComponent implements OnInit {
  private courseId: number;
  private courseName: string;
  public course: ICourses;
  public loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private CourseService: CourseserviceService
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params["id"];
    this.courseName = this.route.snapshot.params["courseName"];
    this.loading = true;

    setTimeout(() => {
      this.CourseService.fetchCourseById(this.courseId).subscribe(
        (course: ICourses) => (this.course = course)
      );
      this.loading = false;
    }, 1000);
  }
}
