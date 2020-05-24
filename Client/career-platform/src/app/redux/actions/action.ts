import { Action } from "@ngrx/store";

// Authentication
export const ADD_TOKEN = "ADD_TOKEN";

export class AddToken implements Action {
  readonly type: string = ADD_TOKEN;
  payload: string;
}
