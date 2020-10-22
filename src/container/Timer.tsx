import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startTimer,
  pauseTimer,
  resetTimer,
  breakTimerStart,
} from "../actions";
import { getTimer, getBreakTimer, getIsBreakTime } from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);
  const breakTimer = useSelector(getBreakTimer);
  const isBreakTime = useSelector(getIsBreakTime);

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
      {isBreakTime ? (
        <span>break time: {fancyTimer(breakTimer)}</span>
      ) : (
        <span>timer: {fancyTimer(timer)}</span>
      )}

      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
      <button onClick={() => dispatch(breakTimerStart())}>Break</button>
    </div>
  );
}
