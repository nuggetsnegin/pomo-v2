import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startWorkTimer,
  pauseWorkTimer,
  resetWorkTimer,
} from "../actions/work";
import { startBreakTimer } from "../actions/break";
import {
  getWorkTimerRemaining,
  getBreakTimerRemaining,
  getIsBreakTimeRunning,
  getIsWorkTimeRunning,
} from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const workTimeRemaining = useSelector(getWorkTimerRemaining);
  const breakTimeRemaining = useSelector(getBreakTimerRemaining);
  const isWorkTimeRunning = useSelector(getIsWorkTimeRunning);
  const isBreakTimeRunning = useSelector(getIsBreakTimeRunning);
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

  const styles = {
    container: {
      display: "flex",
      width: "50vw",
      margin: "10vh auto",
      justifyContent: "space-between",
      textTransform: "uppercase",
    } as React.CSSProperties,
  };

  return (
    <div>
      {!isBreakTimeRunning && (
        <span
          style={{
            fontSize: "3rem",
          }}
        >
          Timer: {fancyTimer(workTimeRemaining)}
        </span>
      )}
      {!isWorkTimeRunning && isBreakTimeRunning && (
        <span>Break timer: {fancyTimer(breakTimeRemaining)}</span>
      )}
      <div className="timers" style={styles.container}>
        {!isWorkTimeRunning && (
          <button onClick={() => dispatch(startWorkTimer())}>Start</button>
        )}

        {!isBreakTimeRunning && (
          <>
            <button onClick={() => dispatch(pauseWorkTimer())}>Pause</button>
            <button onClick={() => dispatch(resetWorkTimer())}>Reset</button>
            <button
              onClick={() => {
                dispatch(resetWorkTimer());
                dispatch(startBreakTimer());
              }}
            >
              Break
            </button>
          </>
        )}
      </div>
    </div>
  );
}
