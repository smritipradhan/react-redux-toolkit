# Redux Toolkit

Redux Challenges and Introducing Redux Toolkit.

1. Mistype the Action Identifiers in Complex Project (We could create constants for solution)
2. More Data we have , more pieces of states we have.Copy a lot of states and keep all of the state properties and the reducer function becomes longer and longer. (Third party packages which allow you to copy state and not modify it accidentally)
3. State Immutability - We have to make sure that we return a brand new State Snapshot and we dont accidently change the existing state anywhere.And we dont accidently change any nested data. Its hard to maintain.

Instead there is another solution to the problem - Redux Toolkit which is developed by the same team which developed Redux.Redux toolkit is simply an extra package which makes working with Redux more convenient and easier.

## Get Started with Redux Toolkit , Adding State Slices

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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

```

## Connecting Redux Toolkit State

```
const counterSlice = createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = createStore(counterSlice.reducer); //It is reducer as it is part of many reducers.
export default store;

```

So, to use our slice we need to use the returned value of our slice.This is a slice of our global state.We want to register our slice to our store.For one reducer it would be fine . We can use combineReducer from "redux" . But we can drop "redux" and use

```

import { createSlice , configureStore} from "@reduxjs/toolkit";

```

configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.

now we can call the configureStore and pass an object , not an reducer function but an object where we set a reducer property and thats the property expected by configureStore.Redux wants one main reducer function,which is responsible for Global State. For now

```

const store = configureStore({
reducer:counterSlice.reducer
})
```

to use the reducer from that counterSlice which combines all those reducer methods to find in that slice.But is we had multiple Slices in bigger application for example..We could set up an object with key value pairs.A map of reducers.and this map is then set as a value for the main reducer and behind the scenes configureStore will emerge all those reducers into one big reducer. So it will merge them for us.

```
const store = configureStore({
reducer: { counter : counterSlice.reducer }
})
```

Final Code store -> index.js

```
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;


```

## Migrating Everything to Redux Toolkit

Now for Dispatching Actions, createSlice automatically creates unique identifiers for our different reducers.To get hold of these action identifiers, we can use our counterSlice and access dot actions.That is then an object full of keys,where the the key names, increment, decrement, and so on.And with that we don't access the reducer methods to find up there but instead we get methods created automatically by Redux Toolkit which when called will create action objects for us.

These methods on the actions object here which we can call will create action objects for us. Therefore these methods are called action creators and they will create action objects for us where these objects already have a type property with a unique identifier per action.

The name of the payload is not upon us this time and is predefined so whatever is passed will be in the payload.We can pass a value / object / anything to the payload....

store->index.js

```
...
...
export const counterActions = counterSlice.actions;
export default store;


```

```

import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch(counterActions.increament());
  };

  const handleDecreament = () => {
    dispatch(counterActions.decreament());
  };

  const handleRandom = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        {showCounter && <div> {counter} </div>}
      </div>
      <button onClick={handleIncreament}>INCREAMENT</button>

      <button onClick={handleDecreament}>DECREAMENT</button>
      <button onClick={handleRandom}>Random</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

```

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

```

```
