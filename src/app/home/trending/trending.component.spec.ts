import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from "@angular/core/testing";

import { TrendingComponent } from "./trending.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { TrendingCourseService } from "./trending.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
describe("TrendingComponent", () => {
  let component: TrendingComponent;
  let fixture: ComponentFixture<TrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [TrendingCourseService, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", async(
    inject([TrendingCourseService], (myService: TrendingCourseService) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })
  ));
});
