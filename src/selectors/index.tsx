import { ReducerState } from "../reducers/types";
//selectors should take all of redux state
//combined reducer - representative of our redux state

export const getWorkTimerRemaining = (state: ReducerState) => {
  return state.timer.workTimeRemaining;
};

export const getBreakTimerRemaining = (state: ReducerState) => {
  return state.timer.breakTimeRemaining;
};

export const getIsWorkTimeRunning = (state: ReducerState) => {
  return state.timer.isRunning;
};

export const getIsBreakTimeRunning = (state: ReducerState) => {
  return state.timer.isRunning;
};
