import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startWorkTimer,
  pauseWorkTimer,
  resetWorkTimer,
} from "../actions/work";
import { startBreakTimer } from "../actions/break";
import { getWorkTimerRemaining } from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const workTimeRemaining = useSelector(getWorkTimerRemaining);
  // const breakTimer = useSelector(getBreakTimer);
  // const isBreakOrWorkTime = useSelector(getIsBreakOrWorkTime);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textTransform: "uppercase",
      }}
    >
      <span>Timer: {fancyTimer(workTimeRemaining)}</span>
      {/* {isBreakOrWorkTime === "break" ? (
        <span>break time: {fancyTimer(breakTimer)}</span>
      ) : (
        <span>timer: {fancyTimer(timer)}</span>
      )} */}
      <button onClick={() => dispatch(startWorkTimer())}>Start</button>
      <button onClick={() => dispatch(pauseWorkTimer())}>Pause</button>
      <button onClick={() => dispatch(resetWorkTimer())}>Reset</button>
      {/* <button onClick={() => dispatch(breakTimerStart())}>Break</button> */}
    </div>
  );
}
