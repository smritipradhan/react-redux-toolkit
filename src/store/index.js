import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament(state) {
      state.counter += 1;
    },
    decreament(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.amout;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
