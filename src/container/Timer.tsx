import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from "../actions";
import { getTimer } from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);

  return (
    <div className="container">
      <span>timer: {timer}</span>
      <button onClick={() => dispatch(startTimer)}>Start</button>
      <button onClick={() => dispatch(pauseTimer)}>Pause</button>
      <button onClick={() => dispatch(resetTimer)}>Reset</button>
    </div>
  );
}
