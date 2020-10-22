export const startTimer = () =>
  ({
    type: "START_TIMER",
    payload: "work",
  } as const);

export const pauseTimer = () =>
  ({
    type: "PAUSE_TIMER",
  } as const);

export const resetTimer = () =>
  ({
    type: "RESET_TIMER",
  } as const);

export const timerTick = () =>
  ({
    type: "TIMER_TICK",
  } as const);

export const breakTimerStart = () =>
  ({
    type: "BREAK_TIMER_START",
    payload: "break",
  } as const);

export type Action =
  | ReturnType<typeof pauseTimer>
  | ReturnType<typeof resetTimer>
  | ReturnType<typeof timerTick>
  | ReturnType<typeof startTimer>
  | ReturnType<typeof breakTimerStart>;
