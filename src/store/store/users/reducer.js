import * as types from "./constants.js";
import { updateUser } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_PENDING:
      return state;
    case types.FETCH_ALL_USERS_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_USERS_FAILED:
      return action.payload;

    case types.FETCH_ONE_USER_PENDING:
      return state;
    case types.FETCH_ONE_USER_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_USER_FAILED:
      return action.payload;

    case types.ADD_USER_PENDING:
      return state;
    case types.ADD_USER_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_USER_FAILED:
      return action.payload;

    case types.REMOVE_USER_PENDING:
      return state;
    case types.REMOVE_USER_SUCCESS:
      return state.filter(userInfo => userInfo.id !== action.payload.id);
    case types.REMOVE_USER_FAILED:
      return action.payload;

    case types.UPDATE_USER_PENDING:
      return state;
    case types.UPDATE_USER_SUCCESS:
      console.log("ACTION in REDUCER", action.payload);
      let otherUser = state.filter(
        userInfo => userInfo.id != action.payload.id
      );
      return [...otherUsers, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_USER_FAILED:
      return action.payload;

    default:
      return state;
  }
};