import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { counter: state.counter + 1, showCounter: state.showCounter };

    case "DECREAMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };

    case "TOGGLE":
      return { counter: state.counter, showCounter: !state.showCounter };

    default:
      return state;
  }
};
const store = createStore(counterReducer);
export default store;
