import { createStore, combineReducers, applyMiddleware } from "redux";
import partsReducer from "./store/parts/reducer";
import vehiclesReducer from "./store/vehicles/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  parts: partsReducer,
  vehicles: vehiclesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));