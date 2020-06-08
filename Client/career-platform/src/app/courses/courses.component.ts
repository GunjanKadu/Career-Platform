import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import * as cloneDeep from "lodash/cloneDeep";

import { CourseserviceService } from "./courseservice.service";
import { ICourses } from "../models/models";
import { Store } from "@ngrx/store";
import { RootState } from "../redux";
import { IState } from "../redux/types/authenticationTypes";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  constructor(
    private courseService: CourseserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<RootState>
  ) {}

  public courses: Array<ICourses>;
  public lecture: any;
  public user: IState;
  public courseCopy: ICourses[];
  public searchTerm: string = null;
  public token: string = null;
  public lengthOfResults: number;
  public loading: boolean = true;
  public lectureCheckBox: boolean = false;
  public durationCheckBox: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.searchTerm = params["courseName"];
        this.token = params["token"];
        if (this.token) {
          const decodedToken = jwt_decode(this.token);
          this.store.select("authentication").subscribe((state: IState) => {
            this.user = state;
          });
          if (
            this.user.authenticated &&
            this.user.user.email == decodedToken.sub
          ) {
            this.courseService
              .fetchAllCourses()
              .subscribe((courses: Array<ICourses>) => {
                let coursesCreatedByUser: Array<ICourses> = courses.filter(
                  (course) => course.email == this.user.user.email
                );
                this.courses = coursesCreatedByUser;
                this.lengthOfResults = coursesCreatedByUser.length;
                this.loading = false;
              });
          } else if (!this.user.authenticated) {
            this.router.navigate(["/"]);
          }
        } else {
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
                this.courseCopy = courses;
              }
            });
        }
      });
    }, 1000);
  }
  identity(index: number, course: ICourses) {
    return course.id;
  }
  lectureFilter(value: number) {
    if (!this.durationCheckBox && !this.lectureCheckBox) {
      this.courses = this.courseCopy;
    }
    console.log(this.courseCopy);
    this.lectureCheckBox = !this.lectureCheckBox;
    if (this.lectureCheckBox) {
      console.log("lecturefilter");
      let filteredCourse = this.courses.filter(
        (course: ICourses) => course.totalLectures > value
      );
      this.courses = filteredCourse;
    } else if (!this.durationCheckBox) {
      this.courses = this.courseCopy;
    }
  }
  durationFilter(value: number) {
    if (!this.durationCheckBox && !this.lectureCheckBox) {
      this.courses = this.courseCopy;
    }
    console.log(this.courseCopy);
    this.durationCheckBox = !this.durationCheckBox;
    if (this.durationCheckBox) {
      console.log("durationFiler");
      let filteredCourse = this.courses.filter(
        (course: ICourses) => +course.totalHours > value
      );
      console.log(filteredCourse);
      this.courses = filteredCourse;
    } else if (!this.lectureCheckBox) {
      this.courses = this.courseCopy;
    }
  }
}
