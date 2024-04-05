

import { REQUEST, SUCCESS, ERROR } from "../constants/todoContant.js";
import axios from "axios";
export const getAllTodoa = () => async (dispatch) => {
  dispatch({
    type: REQUEST,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: ERROR.message });
  }
};
