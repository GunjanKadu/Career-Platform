import { Component, OnInit, Input } from "@angular/core";
import { TrendingCourseService } from "./trending.service";
import { ItrendingCourse } from "src/app/models/models";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.css"],
})
export class TrendingComponent implements OnInit {
  @Input("showTrendingCourseButton") showTrendingCourseButton: boolean;

  public trendingCourses: ItrendingCourse[] = null;
  constructor(private trendingCourseService: TrendingCourseService) {}

  ngOnInit() {
    setTimeout(() => {
      this.trendingCourseService
        .fetchTrendingCourses()
        .subscribe((courses: any) => (this.trendingCourses = courses));
    }, 500);
  }
  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
