//import u from "updeep";
import * as ACTIONS from "../actions";
type ActionsObject = typeof ACTIONS;
type ActionCreatorKey = keyof ActionsObject;
type ActionCreator = ActionsObject[ActionCreatorKey];
export type Action = ReturnType<ActionCreator>;

const initialState = {
  isRunning: false,
  timer: 1500,
  //break: 300,
};

export type ReducerState = typeof initialState;

export default function timer(
  state = initialState as ReducerState,
  action = {} as Action
) {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };
    case "PAUSE_TIMER":
      return { ...state, isRunning: false };
    case "RESET_TIMER":
      return { ...state, isRunning: false, timer: 0 };
    case "TIMER_TICK":
      return { ...state, timer: state.timer - 1 };
    default:
      return state;
  }
}
