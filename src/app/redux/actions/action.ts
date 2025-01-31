import { Action } from "@ngrx/store";
import { IUser } from "../types/authenticationTypes";
import { ICourses } from "src/app/models/models";

// Authentication
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USER = "ADD_USER";
export const LOGOUT = "LOGOUT";
export const ADD_USER_COURSE = "ADD_USER_COURSE";

export class AddToken implements Action {
  readonly type: string = ADD_TOKEN;
  public payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}

export class AddUser implements Action {
  type: string = ADD_USER;
  public payload: IUser;

  constructor(payload: IUser) {
    this.payload = payload;
  }
}

export class AddCourseToUser implements Action {
  type: string = ADD_USER_COURSE;
  public payload: ICourses[];

  constructor(payload: ICourses[]) {
    this.payload = payload;
  }
}

export class Logout implements Action {
  type: string = LOGOUT;
}

export type authenticationtypes = AddToken & AddUser & Logout & AddCourseToUser;
