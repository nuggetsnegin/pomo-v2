import { ReducerState } from "../reducers/work";

export const getWorkTimerRemaining = (state: ReducerState) =>
  state.timeRemaining;
