import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from "../actions";
import { getTimer } from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);

  const fancyTimer = (timer: number) => {
    //http://rocha.la/JavaScript-bitwise-operators-in-practice
    const minutes: number = ~~((timer % 3600) / 60);
    const seconds: number = ~~timer % 60;
    let format: string = "";

    format += "" + minutes + ":" + (seconds < 10 ? "0" : "");
    format += "" + seconds;
    return format;
  };

  return (
    <div className="container">
      <span>timer: {fancyTimer(timer)}</span>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}
