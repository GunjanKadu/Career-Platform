import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootState } from "../redux";
import { IState } from "../redux/types/authenticationTypes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<RootState>) {}
  public randomNumber: number;
  public user: IState;

  ngOnInit() {
    this.store
      .select("authentication")
      .subscribe((state: IState) => (this.user = state));
    this.randomNumber = Math.floor(Math.random() * 10);
  }

  getCssClass() {
    switch (this.randomNumber) {
      case 1:
        return "back1";
        break;
      case 2:
        return "back2";
        break;
      case 3:
        return "back3";
        break;
      case 4:
        return "back4";
        break;
      case 5:
        return "back5";
        break;
      case 6:
        return "back6";
        break;
      case 7:
        return "back7";
        break;
      case 8:
        return "back8";
        break;
      case 9:
        return "back9";
        break;
      default:
        break;
    }
  }
}
