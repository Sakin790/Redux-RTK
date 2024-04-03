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

/*Reducer is a pure function , Jeta peramiter recived kore tar opor base 
kore result dey , jemon state ekta peramiter , action ekte peramiter,
main kotha holo action type er opor base kore state update korbr ,action 
nije ekta function jei kina type return kore , sei type er kothai bolchilam
*/

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENTAL:
      return {
        ...state, //Take all the values from the state
        count: state.count + 1,
      };
    case DECREMENTAL:
      return {
        ...state, //Take all the values from the state
        count: state.count - 1,
      };

    default:
      return state;
  }
};
