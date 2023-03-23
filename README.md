# Redux Toolkit

Redux Challenges and Introducing Redux Toolkit.

1. Mistype the Action Identifiers in Complex Project (We could create constants for solution)
2. More Data we have , more pieces of states we have.Copy a lot of states and keep all of the state properties and the reducer function becomes longer and longer. (Third party packages which allow you to copy state and not modify it accidentally)
3. State Immutability - We have to make sure that we return a brand new State Snapshot and we dont accidently change the existing state anywhere.And we dont accidently change any nested data. Its hard to maintain.

Instead there is another solution to the problem - Redux Toolkit which is developed by the same team which developed Redux.Redux toolkit is simply an extra package which makes working with Redux more convenient and easier.

## Get Started with Redux Toolkit

1 . npm install @reduxjs/toolkit.
we can remove redux as it comes with redux toolkit.

createSlice is even more powerful than create reducer. And it will simplify a couple of aspects in one go.createSlice function accepts an Object as an argument.We are preparing slice of our global state.We add three things

- name
- initialState
- reducers (which is an object)Now we will add reducers which the slice needs.Every method automatically receives the latest state.This methods will by called by Redux,and they will recieve the current state.

Now, here we are allowed to mutate the state.So here we can set state.counter++ for example, for incrementing it. Now this was forbidden.We still must not manipulate the existing state but the good thing is when using Redux toolkit and its functions like create slice, we can't accidentally manipulate the existing state. Because Redux toolkit internally uses another package, called imgur, which will detect code like this and which will automatically clone the existing state,create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.

```
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

```

## Adding State Slices

## Connecting Redux Toolkit State

## Migrating Everything to Redux Toolkit

## Working with Multiple Slices

## Reading and Dispatching from New Slice

## Splitting our Code

## Redux and Side Effects (Asynchronous Code)

## A Problem with useEffect

## Handling HTTP States and Feedback with Redux

## Using an Action Creator Thunk

## Getting Started with Fetching Data

## Finalizing the Fetching Logic

## Exploring the Redux DevTools
