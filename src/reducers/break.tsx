//import u from "updeep";
import * as ACTIONS from "../actions/break";
type ActionsObject = typeof ACTIONS;
type ActionCreatorKey = keyof ActionsObject;
type ActionCreator = ActionsObject[ActionCreatorKey];
export type Action = ReturnType<ActionCreator>;

const BREAK_TIMER_DURATION = 300;

const initialState = {
  isRunning: false,
  timeRemaining: BREAK_TIMER_DURATION,
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
    case "START_BREAK_TIMER":
      return { ...state, isRunning: true };
    case "PAUSE_BREAK_TIMER":
      return { ...state, isRunning: false };
    case "RESET_BREAK_TIMER":
      return initialState;
    default:
      return state;
  }
}
