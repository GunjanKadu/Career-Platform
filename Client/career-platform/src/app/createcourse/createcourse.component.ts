import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ICourses, ICreatedCourse } from "../models/models";
import { RootState } from "../redux";
import { Store } from "@ngrx/store";
import { IState } from "../redux/types/authenticationTypes";
import { CourseserviceService } from "../courses/courseservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-createcourse",
  templateUrl: "./createcourse.component.html",
  styleUrls: ["./createcourse.component.css"],
})
export class CreatecourseComponent implements OnInit {
  constructor(
    private store: Store<RootState>,
    private courseService: CourseserviceService,
    private router: Router
  ) {}

  @ViewChild("courseInfoData", { static: false }) courseInfoData: NgForm;
  @ViewChild("descriptionForm", { static: false }) descriptionForm: NgForm;

  public selectedValue: string = "info";
  public imagePreview: string = null;
  public state: IState;
  public error: boolean = false;

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((state: IState) => (this.state = state));
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
      courseAuthor: this.state.user.firstName + this.state.user.lastName,
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
  }
}
