import { REQUEST, SUCCESS, ERROR } from "../constants/todoContant.js";

const initialState = {
  isLoading: false,
  todo: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case ERROR:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
