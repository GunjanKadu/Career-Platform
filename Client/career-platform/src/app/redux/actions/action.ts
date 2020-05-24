import { Action } from "@ngrx/store";
import { IUser } from "../types/authenticationTypes";

// Authentication
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USER = "ADD_USER";

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

export type authenticationtypes = AddToken & AddUser;
