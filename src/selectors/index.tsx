import { ReducerState } from "../reducers";

export const getTimer = (state: ReducerState) => state.timer;
export const getStatus = (state: ReducerState) => state.isRunning;
export const getBreakTimer = (state: ReducerState) => state.breakTimer;
export const getIsBreakOrWorkTime = (state: ReducerState) =>
  state.isBreakOrWorkTime;
