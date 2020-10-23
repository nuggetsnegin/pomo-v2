import u from "updeep";
import { Action } from "../actions/types";

const BREAK_TIMER_DURATION = 300;

const initialState = {
  isRunning: false,
  timeRemaining: BREAK_TIMER_DURATION,
};

export type BreakTimerState = typeof initialState;

export default function timer(
  state = initialState as BreakTimerState,
  action = {} as Action
) {
  switch (action.type) {
    case "TIMER_TICK":
      if (state.timeRemaining <= 0 || !state.isRunning) {
        return state;
      }
      return u({ timeRemaining: state.timeRemaining - 1 }, state);
    case "START_BREAK_TIMER":
      return u({ isRunning: true }, state);
    default:
      return state;
  }
}
