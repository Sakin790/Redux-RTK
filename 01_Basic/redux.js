import { createStore } from "redux";

const INCREMENTAL = "INCREMENTAL";
const DECREMENTAL = "DECREMENTAL";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"; // Changed to uppercase for consistency

// State
const initialCounterState = {
  count: 0,
};

// Action creators
const incrementActions = () => ({
  type: INCREMENTAL,
});

const decrementActions = () => ({
  type: DECREMENTAL,
});

const resetActions = () => ({
  type: RESET,
});

const IncrementByValue = (value) => ({
  type: INCREMENT_BY_VALUE,
  payload: value,
});

// Reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENTAL:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENTAL:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE: // Changed to uppercase to match action type
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(IncrementByValue(10)); // Dispatching the action correctly
