import u from "updeep";
import * as ACTIONS from "../actions";
type ActionsObject = typeof ACTIONS;
type ActionCreatorKey = keyof ActionsObject;
type ActionCreator = ActionsObject[ActionCreatorKey];
export type Action = ReturnType<ActionCreator>;

const initialState = {
  timer: 0,
  start: false,
  reset: false,
  break: 300,
};

export type ReducerState = typeof initialState;

export default function timer(
  state = initialState as ReducerState,
  action = {} as Action
) {
  switch (action.type) {
    case "START_TIMER":
      return u({ timer: state.timer + 1500 }, state);
    default:
      return state;
  }
}
