import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseserviceService } from "../courseservice.service";
import { ICourses } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { RootState } from "src/app/redux";
import { IState } from "src/app/redux/types/authenticationTypes";
import * as Action from "../../redux/actions/action";
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
  public user: IState;
  public isUserEnrolledForCourse: boolean;
  public courseRating: String;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseserviceService,
    private store: Store<RootState>
  ) {}

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((user: IState) => (this.user = user));

    this.courseId = this.route.snapshot.params["id"];
    this.courseName = this.route.snapshot.params["courseName"];
    this.loading = true;

    setTimeout(() => {
      this.courseService
        .fetchCourseById(this.courseId)
        .subscribe((course: ICourses) => (this.course = course));
      this.loading = false;
      this.courseRating = this.course.rating;
    }, 1000);

    if (this.user.user) {
      this.user.user.courses.map((course) =>
        course.id == this.courseId && course.name == this.courseName
          ? (this.isUserEnrolledForCourse = true)
          : false
      );
    }
  }

  registerCourse() {
    if (this.user.authenticated) {
      this.courseService
        .enrollUserToACourse(this.user.user.id, this.courseId)
        .subscribe((res: ICourses[]) => {
          this.store.dispatch(new Action.AddCourseToUser(res));
          console.log(res);
        });
    }
  }
}
