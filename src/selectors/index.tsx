import { ReducerState } from "../reducers/types";
//selectors should take all of redux state
//combined reducer - representative of our redux state

export const getWorkTimerRemaining = (state: ReducerState) => {
  return state.workTimer.timeRemaining;
};

export const getBreakTimerRemaining = (state: ReducerState) => {
  return state.breakTimer.timeRemaining;
};

export const getIsWorkTimeRunning = (state: ReducerState) => {
  return state.workTimer.isRunning;
};

export const getIsBreakTimeRunning = (state: ReducerState) => {
  return state.breakTimer.isRunning;
};
