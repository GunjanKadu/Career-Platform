import * as AuthenticationState from "./types/authenticationTypes";
import { ActionReducerMap } from "@ngrx/store";
import { AuthenticationReducer } from "./reducers/Authentication";

export interface RootState {
  authentication: AuthenticationState.IState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  authentication: AuthenticationReducer,
};
