import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from "./types";

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const res = await fetch("/logs");
//     const data = await res.json(); // Format data as a json
//
//     dispatch({ type: GET_LOGS, payload: data });
//   };
// };

// Get Logs from Server
export const getLogs = () => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json(); // Format data as a json
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, dispatch: err.response.status });
  }
};

// Add log
export const addLog = log => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json(); // Format data as a json
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, dispatch: err.response.status });
  }
};

// Delete Log
export const deleteLog = id => async dispatch => {
  // Returns a function
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, dispatch: err.response.status });
  }
};

// Update Log
export const updateLog = log => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, dispatch: err.response.status });
  }
};

// Search Logs
export const searchLogs = text => async dispatch => {
  // Returns a function
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json(); // Format data as a json
    dispatch({ type: SEARCH_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, dispatch: err.response.status });
  }
};

// Set Current
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
