import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };

  const handleDecreament = () => {
    dispatch({ type: "DECREAMENT" });
  };

  // const handleRandom = () => {
  //   dispatch({ type: "RANDOM", amount: 8 });
  // };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        {showCounter && <div> {counter} </div>}
      </div>
      <button onClick={handleIncreament}>INCREAMENT</button>

      <button onClick={handleDecreament}>DECREAMENT</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
