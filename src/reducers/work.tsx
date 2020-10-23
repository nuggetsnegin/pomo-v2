//import u from "updeep";
import { Action } from "../actions/types";

const WORK_TIMER_DURATION = 1500;

const initialState = {
  isRunning: false,
  timeRemaining: WORK_TIMER_DURATION,
};

export type WorkTimerState = typeof initialState;

export default function timer(
  state = initialState as WorkTimerState,
  action = {} as Action
) {
  switch (action.type) {
    case "TIMER_TICK":
      if (state.timeRemaining <= 0 || !state.isRunning) {
        return state;
      }
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
      };
    case "START_WORK_TIMER":
      return { ...state, isRunning: true };
    case "PAUSE_WORK_TIMER":
      return { ...state, isRunning: false };
    case "RESET_WORK_TIMER":
      return initialState;
    default:
      return state;
  }
}
