import * as BREAK_ACTIONS from "./break"; //* - all named exports
import * as TICK_ACTION from "./tick";
import * as WORK_ACTIONS from "./work";

const ACTIONS = {
  ...BREAK_ACTIONS,
  ...TICK_ACTION,
  ...WORK_ACTIONS,
};

//type signatures of the values of the ACTIONS obj
//values will be the action creators (functions)
//need the return type of the action creator
// type ActionsObject = typeof ACTIONS;
// type ActionsObjectValue = typeof ACTIONS[keyof ActionsObject]; //keyof can be any key of the actions object (i.e. pauseWorkTimer, resetWorkTimer)
// export type ActionsObjectReturnType = ReturnType<ActionsObjectValue>;

export type Action = ReturnType<typeof ACTIONS[keyof typeof ACTIONS]>;
