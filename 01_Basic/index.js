const initialCounterState = {
  count: 0,
};


const incrementActions = () => {
  return {
    type: "INCREMENTAL",
  };
};
const decrementActions = () => {
  return {
    type: "DECREMENTAL",
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENTAL:
      return {
        count: state.count + 1,
      };
    case DECREMENTAL:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
