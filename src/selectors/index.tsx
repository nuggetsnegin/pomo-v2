import { ReducerState } from "../reducers";
//??
export const getTimer = (state: ReducerState) => state.elapsedTime;

export const startTimer = (state: ReducerState) => state.isRunning;
