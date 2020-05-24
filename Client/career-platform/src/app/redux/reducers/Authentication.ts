import * as I from "../types/authenticationTypes";
import * as ActionTypes from "../actions/action";

const initialState: I.IState = {
  token: null,
};

export function AuthenticationReducer(
  state: I.IState = initialState,
  action: ActionTypes.AddToken
) {
  switch (action.type) {
    case ActionTypes.ADD_TOKEN:
      return { ...state, token: action.payload };
  }
}
