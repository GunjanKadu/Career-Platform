import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-createcourse",
  templateUrl: "./createcourse.component.html",
  styleUrls: ["./createcourse.component.css"],
})
export class CreatecourseComponent implements OnInit {
  constructor() {}

  public selectedValue: string = "info";
  public today: Date;
  public imagePreview: string = null;
  ngOnInit() {
    this.today = new Date();
  }

  whichFormToShow(value: string) {
    this.selectedValue = value;
  }
  onImageSelect(event: any) {
    console.log();
    this.imagePreview = event.srcElement.value;
  }
}
