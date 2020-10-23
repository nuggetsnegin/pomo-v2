import { WorkTimerState } from "./work";
import { BreakTimerState } from "./break";

export type ReducerState = {
  workTimer: WorkTimerState;
  breakTimer: BreakTimerState;
};
