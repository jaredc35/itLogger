import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";

// Get techs from the server
export const getTechs = () => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json(); // Format data as a json
    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, dispatch: err.response.status });
  }
};

// Add Technician to Server
export const addTech = tech => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json(); // Format data as a json
    dispatch({ type: ADD_TECH, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, dispatch: err.response.status });
  }
};

// Delete a tech
export const deleteTech = id => async dispatch => {
  // Returns a function
  try {
    setLoading();
    await fetch(`/techs/${id}`, { method: "DELETE" });
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, dispatch: err.response.status });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
