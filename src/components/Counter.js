import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
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
