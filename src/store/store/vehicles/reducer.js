import * as types from "./constants.js";
import { updateVehicle } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_VEHICLES_PENDING:
      return state;
    case types.FETCH_ALL_VEHICLES_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_VEHICLES_FAILED:
      return action.payload;

    case types.FETCH_ONE_VEHICLE_PENDING:
      return state;
    case types.FETCH_ONE_VEHICLE_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_VEHICLE_FAILED:
      return action.payload;

    case types.ADD_VEHICLE_PENDING:
      return state;
    case types.ADD_VEHICLE_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_VEHICLE_FAILED:
      return action.payload;

    case types.REMOVE_VEHICLE_PENDING:
      return state;
      case types.REMOVE_VEHICLE_SUCCESS:
        console.log("STATE", state)
      return state.filter(vehicleInfo => vehicleInfo.id !== action.payload);
    case types.REMOVE_VEHICLE_FAILED:
      return action.payload;

    case types.UPDATE_VEHICLE_PENDING:
      return state;
    case types.UPDATE_VEHICLE_SUCCESS:
      console.log("ACTION in REDUCER", action.payload.id);
      let otherVehicles = state.filter(
        vehicleInfo => vehicleInfo.id != action.payload
      );
      return [...otherVehicles, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_VEHICLE_FAILED:
      return action.payload;

    default:
      return state;
  }
};
