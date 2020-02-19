import axios from "axios";
import {
  FETCH_ALL_VEHICLES_PENDING,
  FETCH_ALL_VEHICLES_SUCCESS,
  FETCH_ALL_VEHICLES_FAILED,
  FETCH_ONE_VEHICLE_PENDING,
  FETCH_ONE_VEHICLE_SUCCESS,
  FETCH_ONE_VEHICLE_FAILED,
  ADD_VEHICLE_PENDING,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FAILED,
  REMOVE_VEHICLE_PENDING,
  REMOVE_VEHICLE_SUCCESS,
  REMOVE_VEHICLE_FAILED,
  UPDATE_VEHICLE_PENDING,
  UPDATE_VEHICLE_SUCCESS,
  UPDATE_VEHICLE_FAILED
} from "./constants.js";

export const fetchAllVehicles = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_VEHICLES_PENDING
    });
    axios
      .get(`http://localhost:8080/vehicles`)
      .then(response => {
        console.log("getting data for vehicles", response.data);
        const vehicles = response.data;
        dispatch({
          type: FETCH_ALL_VEHICLES_SUCCESS,
          payload: vehicles
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_VEHICLES_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneVehicle = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_VEHICLE_PENDING
    });
    axios
      .get(`http://localhost:8080/vehicles/${id}`)
      .then(response => {
        const vehicle = response.data;
        dispatch({
          type: FETCH_ONE_VEHICLE_SUCCESS,
          payload: vehicle
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_VEHICLE_FAILED,
          payload: error
        });
      });
  };
};

export const addVehicle = newVehicle => {
  return dispatch => {
    dispatch({
      type: ADD_VEHICLE_PENDING
    });
    axios
      .post(`http://localhost:8080/vehicles`, newVehicle)
      .then(response => {
        dispatch({
          type: ADD_VEHICLE_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_VEHICLE_FAILED,
          payload: error
        });
      });
  };
};

export const updateVehicle = updatedVehicle => {
  return dispatch => {
    dispatch({
      type: UPDATE_VEHICLE_PENDING
    });
    axios
      .patch(`http://localhost:8080/vehicles/${updatedVehicle.id}`, updatedVehicle)
      .then(response => {
        dispatch({
          type: UPDATE_VEHICLE_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_VEHICLE_FAILED,
          payload: error
        });
      });
  };
};

export const removeVehicle = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_VEHICLE_PENDING
    });
    axios
      .delete(`http://localhost:8080/vehicles/${id}`)
      .then(response => {
        console.log("RESPONSE", response.data);
        dispatch({
          type: REMOVE_VEHICLE_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_VEHICLE_FAILED,
          payload: error
        });
      });
  };
};
