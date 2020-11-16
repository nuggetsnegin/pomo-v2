import u from "updeep";
import { Action } from "../actions/types";

const WORK_TIMER_DURATION = 1500;
const BREAK_TIMER_DURATION = 300;

const initialState = {
  isRunning: false,
  workTimeRemaining: WORK_TIMER_DURATION,
  breakTimeRemaining: BREAK_TIMER_DURATION,
};

export type WorkTimerState = typeof initialState;

export default function timer(
  state = initialState as WorkTimerState,
  action = {} as Action
) {
  switch (action.type) {
    case "TIMER_TICK":
      if (
        state.breakTimeRemaining <= 0 ||
        state.workTimeRemaining <= 0 ||
        !state.isRunning
      ) {
        return state;
      }
      return u({ timeRemaining: state.breakTimeRemaining - 1 }, state);
    case "START_WORK_TIMER":
      return u({ isRunning: true }, state);
    case "START_BREAK_TIMER":
      return u({ isRunning: true }, state);
    case "PAUSE_WORK_TIMER":
      return u({ isRunning: false }, state);
    case "RESET_WORK_TIMER":
      return initialState;
    default:
      return state;
  }
}
