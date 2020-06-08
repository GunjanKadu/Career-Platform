import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { RootState } from "src/app/redux";

import { CourseserviceService } from "../courseservice.service";
import { ICourses } from "src/app/models/models";
import { IState } from "src/app/redux/types/authenticationTypes";
import * as Action from "../../redux/actions/action";
@Component({
  selector: "app-coursedesc",
  templateUrl: "./coursedesc.component.html",
  styleUrls: ["./coursedesc.component.css"],
})
export class CoursedescComponent implements OnInit, DoCheck, OnDestroy {
  private courseId: number;
  private courseName: string;
  public course: ICourses;
  public loading: boolean;
  public checkWhichButtonToShowForUserAction: boolean;
  public user: IState;
  public isUserEnrolledForCourse: boolean;
  public courseRating: String;
  public hasUserCreatedThisCourse: boolean;
  private userBuyedACourse: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseserviceService,
    private store: Store<RootState>,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    sessionStorage.removeItem("course");
    sessionStorage.removeItem("id");
  }
  ngDoCheck(): void {
    if (this.user.user && this.userBuyedACourse) {
      this.store
        .select("authentication")
        .subscribe((user: IState) => (this.user = user));
      this.isUserEnrolledForACourse();
      this.userBuyedACourse = false;
    }
  }

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((user: IState) => (this.user = user));

    this.courseId = this.route.snapshot.params["id"];
    this.courseName = this.route.snapshot.params["courseName"];
    this.loading = true;

    sessionStorage.setItem("course", this.courseName);
    sessionStorage.setItem("id", this.courseId.toString());

    setTimeout(() => {
      this.courseService
        .fetchCourseById(this.courseId)
        .subscribe((course: ICourses) => {
          this.course = course;
          this.hasUserCreatedThisCourse = course.email === this.user.user.email;
        });
      this.loading = false;
      this.courseRating = this.course.rating;
    }, 1000);

    this.isUserEnrolledForACourse();
  }

  private isUserEnrolledForACourse() {
    if (this.user.user) {
      this.checkWhichButtonToShowForUserAction = true;
      console.log(this.checkWhichButtonToShowForUserAction);
      setTimeout(() => {
        this.user.user.courses.map((course) =>
          course.id == this.courseId && course.name == this.courseName
            ? (this.isUserEnrolledForCourse = true)
            : false
        );
        this.checkWhichButtonToShowForUserAction = false;
        console.log(this.checkWhichButtonToShowForUserAction);
      }, 1500);
    }
  }

  registerCourse() {
    if (this.user.authenticated) {
      this.courseService
        .enrollUserToACourse(this.user.user.id, this.courseId)
        .subscribe((res: ICourses[]) => {
          this.store.dispatch(new Action.AddCourseToUser(res));
          console.log(res);
          this.userBuyedACourse = true;
        });
    }
  }
  deRegisterCourse() {
    if (this.user.authenticated) {
      this.courseService
        .deEnrollUserFromACourse(this.user.user.id, this.courseId)
        .subscribe((res: ICourses[]) => {
          this.store.dispatch(new Action.AddCourseToUser(res));
          console.log(res);
        });
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/course/", this.courseName, this.courseId]);
      });
    }
  }

  addlecturedToCourse() {
    this.router.navigate([
      "createcourse",
      sessionStorage.getItem("token"),
      this.course.id,
    ]);
  }
}
