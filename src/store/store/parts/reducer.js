import * as types from "./constants.js";
import { updatePart } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_PARTS_PENDING:
      return state;
    case types.FETCH_ALL_PARTS_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_PARTS_FAILED:
      return action.payload;

    case types.FETCH_ONE_PART_PENDING:
      return state;
    case types.FETCH_ONE_PART_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_PART_FAILED:
      return action.payload;

    case types.ADD_PART_PENDING:
      return state;
    case types.ADD_PART_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_PART_FAILED:
      return action.payload;

    case types.REMOVE_PART_PENDING:
      return state;
    case types.REMOVE_PART_SUCCESS:
      console.log("STATE", state)
      return state.filter(partInfo => partInfo.id !== action.payload);
    case types.REMOVE_PART_FAILED:
      return action.payload;

    case types.UPDATE_PART_PENDING:
      return state;
    case types.UPDATE_PART_SUCCESS:
      console.log("ACTION in REDUCER", action.payload.id);
      let otherParts = state.filter(
        partInfo => partInfo.id != action.payload.id
      );
      return [...otherParts, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_PART_FAILED:
      return action.payload;

    default:
      return state;
  }
};
