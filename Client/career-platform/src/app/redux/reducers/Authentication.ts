import * as I from "../types/authenticationTypes";
import * as ActionTypes from "../actions/action";

const initialState: I.IState = {
  token: null,
  user: null,
  authenticated: false,
};

export function AuthenticationReducer(
  state: I.IState = initialState,
  action: ActionTypes.authenticationtypes
) {
  switch (action.type) {
    case ActionTypes.ADD_TOKEN:
      sessionStorage.setItem("token", action.payload);
      return { ...state, token: action.payload, authenticated: true };
    case ActionTypes.ADD_USER:
      return { ...state, user: action.payload, authenticated: false };
    case ActionTypes.LOGOUT:
      sessionStorage.removeItem("token");
      return { ...state, user: null, authenticated: false, token: null };
    default:
      return state;
  }
}
