export const startBreakTimer = () =>
  ({
    type: "START_BREAK_TIMER",
  } as const);

export const pauseBreakTimer = () =>
  ({
    type: "PAUSE_BREAK_TIMER",
  } as const);

export const resetBreakTimer = () =>
  ({
    type: "RESET_BREAK_TIMER",
  } as const);

export const timerTick = (numTick: number) =>
  ({
    type: "TIMER_TICK",
    payload: {
      numTick,
    },
  } as const);

export type Action =
  | ReturnType<typeof pauseBreakTimer>
  | ReturnType<typeof timerTick>
  | ReturnType<typeof resetBreakTimer>
  | ReturnType<typeof startBreakTimer>;
