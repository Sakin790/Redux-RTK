//https://jsonplaceholder.typicode.com/todos

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";

//State
const initailTodoState = {
  todo: [],
  isLoading: false,
  error: null,
};

//Action
const getTodoRequest = () => {
  return {
    type: REQUEST,
  };
};
const getTodoSuccess = (todo) => {
  return {
    type: SUCCESS,
    payload: todo,
  };
};
const getTodoError = (error) => {
  return {
    type: FAILED,
    payload: error,
  };
};

//Reducer Create
const todoReducer = (state = initailTodoState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case Error:
      return;

    default:
      return state;
  }
};
