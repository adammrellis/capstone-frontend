import axios from "axios";
import {
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  FETCH_ONE_USER_PENDING,
  FETCH_ONE_USER_SUCCESS,
  FETCH_ONE_USER_FAILED,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  REMOVE_USER_PENDING,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILED,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from "./constants.js";

export const fetchAllUsers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_USERS_PENDING
    });
    axios
      .get(`http://localhost:8080/users`)
      .then(response => {
        console.log("getting data for users", response.data);
        const users = response.data;
        dispatch({
          type: FETCH_ALL_USERS_SUCCESS,
          payload: users
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_USERS_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneUser = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_USER_PENDING
    });
    axios
      .get(`http://localhost:8080/users/${id}`)
      .then(response => {
        const user = response.data;
        dispatch({
          type: FETCH_ONE_USER_SUCCESS,
          payload: user
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_USER_FAILED,
          payload: error
        });
      });
  };
};

export const addUser = newUser => {
  return dispatch => {
    dispatch({
      type: ADD_USER_PENDING
    });
    axios
      .post(`http://localhost:8080/users`, newUser)
      .then(response => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_USER_FAILED,
          payload: error
        });
      });
  };
};

export const updateUser = updatedUser => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER_PENDING
    });
    axios
      .patch(`http://localhost:8080/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_USER_FAILED,
          payload: error
        });
      });
  };
};

export const removeUser = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_USER_PENDING
    });
    axios
      .delete(`http://localhost:8080/users/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_USER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_USER_FAILED,
          payload: error
        });
      });
  };
};