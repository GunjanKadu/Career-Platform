import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ICourses } from "../models/models";
import { RootState } from "../redux";
import { Store } from "@ngrx/store";
import { IState } from "../redux/types/authenticationTypes";

@Component({
  selector: "app-createcourse",
  templateUrl: "./createcourse.component.html",
  styleUrls: ["./createcourse.component.css"],
})
export class CreatecourseComponent implements OnInit {
  constructor(private store: Store<RootState>) {}

  @ViewChild("courseInfoData", { static: false }) courseInfoData: NgForm;
  @ViewChild("descriptionForm", { static: false }) descriptionForm: NgForm;

  public selectedValue: string = "info";
  public imagePreview: string = null;
  public state: IState;

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
    let courseCreated = {
      name: this.courseInfoData.value.courseName,
      totalLectures: this.courseInfoData.value.totallectures,
      category: this.courseInfoData.value.category,
      price: this.courseInfoData.value.price,
      totalHours: this.courseInfoData.value.totalhours,
      level: this.courseInfoData.value.level,
      image: this.courseInfoData.value.imageurl,
      shortDesc: this.courseInfoData.value.level,
      courseAuthor: this.state.user.firstName + this.state.user.lastName,
      email: this.state.user.email,
    };
    sessionStorage.setItem("tempCourse", JSON.stringify(courseCreated));
    this.selectedValue = "description";
  }
  onSubmitCourseFinalCourse() {
    let courseCreate = JSON.parse(sessionStorage.getItem("tempCourse"));

    courseCreate.desc = this.descriptionForm.value.description;

    console.log(courseCreate);
  }
}
