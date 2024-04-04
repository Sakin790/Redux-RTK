import { createStore } from "redux";

//Action Variables

const ADD_USER = "addUser";

//state

const initialState = {
  user: ["Sakin"],
  count: 1,
};

//actions

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const store = createStore(Reducer);


store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(addUserAction("mahid"))
