//import u from "updeep";
import * as ACTIONS from "../actions/work";
type ActionsObject = typeof ACTIONS;
type ActionCreatorKey = keyof ActionsObject;
type ActionCreator = ActionsObject[ActionCreatorKey];
export type Action = ReturnType<ActionCreator>;

const WORK_TIMER_DURATION = 1500;

const initialState = {
  isRunning: false,
  timeRemaining: WORK_TIMER_DURATION,
};

export type ReducerState = typeof initialState;

export default function timer(
  state = initialState as ReducerState,
  action = {} as Action
) {
  switch (action.type) {
    case "TIMER_TICK":
      if (state.timeRemaining <= 0 || !state.isRunning) {
        return state;
      }
      return {
        ...state,
        timeRemaining: state.timeRemaining - action.payload.numTick,
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
