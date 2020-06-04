import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
export class CoursedescComponent implements OnInit, DoCheck {
  private courseId: number;
  private courseName: string;
  public course: ICourses;
  public loading: boolean;
  public checkWhichButtonToShowForUserAction: boolean;
  public user: IState;
  public isUserEnrolledForCourse: boolean;
  public courseRating: String;
  private userBuyedACourse: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseserviceService,
    private store: Store<RootState>,
    private router: Router
  ) {}
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

    setTimeout(() => {
      this.courseService
        .fetchCourseById(this.courseId)
        .subscribe((course: ICourses) => (this.course = course));
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
      this.router.navigate(["/courses"]);
    }
  }
}
