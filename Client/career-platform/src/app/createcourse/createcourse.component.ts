import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ICreatedCourse, ICourses } from "../models/models";
import { RootState } from "../redux";
import { Store } from "@ngrx/store";
import { IState } from "../redux/types/authenticationTypes";
import { CourseserviceService } from "../courses/courseservice.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-createcourse",
  templateUrl: "./createcourse.component.html",
  styleUrls: ["./createcourse.component.css"],
})
export class CreatecourseComponent implements OnInit {
  constructor(
    private store: Store<RootState>,
    private courseService: CourseserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild("courseInfoData", { static: false }) courseInfoData: NgForm;
  @ViewChild("descriptionForm", { static: false }) descriptionForm: NgForm;

  public selectedValue: string;
  public imagePreview: string = null;
  public state: IState;
  public error: boolean = false;
  public existingCourse: ICourses;

  ngOnInit() {
    this.selectedValue = "info";
    if (this.route.snapshot.params["token"]) {
      const token = jwt_decode(this.route.snapshot.params["token"]);
      const courseId = this.route.snapshot.params["courseId"];
      this.courseService
        .fetchCourseById(courseId)
        .subscribe((course: ICourses) => {
          if (course.email === token.sub) {
            this.existingCourse = course;
            this.imagePreview = course.image;
            this.selectedValue = "content";
          } else {
            this.existingCourse = null;
          }
        });
      this.store
        .select("authentication")
        .subscribe((state: IState) => (this.state = state));
    }
  }

  whichFormToShow(value: string) {
    this.selectedValue = value;
  }
  onImageSelect(event: any) {
    console.log();
    this.imagePreview = event.srcElement.value;
  }
  onSubmitCourseInfo() {
    let courseCreated: ICreatedCourse = {
      name: this.courseInfoData.value.courseName,
      totalLectures: this.courseInfoData.value.totallectures,
      category: this.courseInfoData.value.category,
      price: this.courseInfoData.value.price.toString(),
      totalHours: this.courseInfoData.value.totalhours.toString(),
      level: this.courseInfoData.value.level,
      image: this.courseInfoData.value.imageurl,
      shortDesc: this.courseInfoData.value.shortDescription,
      //prettier-ignore
      courseAuthor:this.state.user.firstName + " " + this.state.user.lastName,
      email: this.state.user.email,
    };
    sessionStorage.setItem("tempCourse", JSON.stringify(courseCreated));
    this.selectedValue = "description";
  }
  onSubmitCourseFinalCourse() {
    let courseCreate: ICreatedCourse = JSON.parse(
      sessionStorage.getItem("tempCourse")
    );
    courseCreate.desc = this.descriptionForm.value.description;
    if (!this.existingCourse) {
      this.courseService.addCourse(courseCreate).subscribe(
        (res: ICreatedCourse) => {
          console.log(res);
          sessionStorage.removeItem("tempCourse");
          this.selectedValue = "content";
          this.router.navigate(["course", res.name, res.id]);
        },
        (error) => {
          console.log(error);
          this.error = true;
        }
      );
    } else {
      this.courseService
        .updateCourse(courseCreate, this.existingCourse.id)
        .subscribe((res) => console.log(res));
    }
  }
}
