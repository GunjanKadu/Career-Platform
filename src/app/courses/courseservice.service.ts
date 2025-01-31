import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import * as URL from "../url";
import { ICourses, ICreatedCourse, ILecture } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class CourseserviceService {
  constructor(private http: HttpClient) {}

  fetchAllCourses() {
    return this.http.get(URL.COURSES);
  }

  fetchCourseById(id: number) {
    return this.http.get(`${URL.COURSES}/${id}`);
  }

  enrollUserToACourse(userId: number, courseId: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    console.log(URL.ADDUSERTOCOURSE(userId, courseId));
    console.log(token);
    return this.http.post<ICourses[]>(
      URL.ADDUSERTOCOURSE(userId, courseId),
      {},
      {
        headers,
      }
    );
  }
  deEnrollUserFromACourse(id: number, courseId: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete<ICourses[]>(URL.ADDUSERTOCOURSE(id, courseId), {
      headers,
    });
  }

  addCourse(course: ICreatedCourse) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<ICreatedCourse>(URL.ADDCOURSE, course, {
      headers,
    });
  }
  updateCourse(course: ICreatedCourse, courseId: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.put<ICreatedCourse>(
      `${URL.ADDCOURSE}/${courseId}`,
      course,
      {
        headers,
      }
    );
  }
  addLectureToCourse(lecture: ILecture, courseId: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<ICreatedCourse>(
      `${URL.ADDLECTURETOCOURSE}/${courseId}`,
      lecture,
      {
        headers,
      }
    );
  }
  deleteLectureFromCourse(lectureId: number, courseId: number) {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<ICourses>(URL.DELETELECTURE(courseId, lectureId), {
      headers,
    });
  }
}
