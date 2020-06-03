import { Component, OnInit, Input } from "@angular/core";
import { IState } from "../../redux/types/authenticationTypes";
import { ICourses } from "src/app/models/models";
import { Store } from "@ngrx/store";
import { RootState } from "src/app/redux";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"],
})
export class CurrentComponent implements OnInit {
  @Input("user") user: IState;
  public coursesEnrolled: ICourses[];

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.select("authentication").subscribe((user: IState) => {
      if (user.user) {
        this.coursesEnrolled = user.user.courses;
      }
    });
  }
}
