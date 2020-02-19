import axios from "axios";
import {
  FETCH_ALL_PARTS_PENDING,
  FETCH_ALL_PARTS_SUCCESS,
  FETCH_ALL_PARTS_FAILED,
  FETCH_ONE_PART_PENDING,
  FETCH_ONE_PART_SUCCESS,
  FETCH_ONE_PART_FAILED,
  ADD_PART_PENDING,
  ADD_PART_SUCCESS,
  ADD_PART_FAILED,
  REMOVE_PART_PENDING,
  REMOVE_PART_SUCCESS,
  REMOVE_PART_FAILED,
  UPDATE_PART_PENDING,
  UPDATE_PART_SUCCESS,
  UPDATE_PART_FAILED
} from "./constants.js";

export const fetchAllParts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_PARTS_PENDING
    });
    axios
      .get(`http://localhost:8080/parts`)
      .then(response => {
        console.log("getting data for parts", response.data);
        const parts = response.data;
        dispatch({
          type: FETCH_ALL_PARTS_SUCCESS,
          payload: parts
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_PARTS_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOnePart = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_PART_PENDING
    });
    axios
      .get(`http://localhost:8080/parts/${id}`)
      .then(response => {
        const part = response.data;
        dispatch({
          type: FETCH_ONE_PART_SUCCESS,
          payload: part
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_PART_FAILED,
          payload: error
        });
      });
  };
};

export const addPart = newPart => {
  return dispatch => {
    dispatch({
      type: ADD_PART_PENDING
    });
    axios
      .post(`http://localhost:8080/parts`, newPart)
      .then(response => {
        dispatch({
          type: ADD_PART_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_PART_FAILED,
          payload: error
        });
      });
  };
};

export const updatePart = updatedPart => {
  console.log("updated PART", updatedPart)
  return dispatch => {
    dispatch({
      type: UPDATE_PART_PENDING
    });
    axios
      .patch(`http://localhost:8080/parts/${updatedPart.id}`, updatedPart)
      .then(response => {
        console.log("response part update", response)
        dispatch({
          type: UPDATE_PART_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_PART_FAILED,
          payload: error
        });
      });
  };
};

export const removePart = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_PART_PENDING
    });
    axios
      .delete(`http://localhost:8080/parts/${id}`)
      .then(response => {
        console.log("Parts RESPONSE", response.data);
        dispatch({
          type: REMOVE_PART_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_PART_FAILED,
          payload: error
        });
      });
  };
};
