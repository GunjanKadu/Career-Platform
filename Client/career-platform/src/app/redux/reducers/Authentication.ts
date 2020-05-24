import * as I from "../types/authenticationTypes";
import * as ActionTypes from "../actions/action";

const initialState: I.IState = {
  token: null,
  user: null,
};

export function AuthenticationReducer(
  state: I.IState = initialState,
  action: ActionTypes.authenticationtypes
) {
  switch (action.type) {
    case ActionTypes.ADD_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.ADD_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
