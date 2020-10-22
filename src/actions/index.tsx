export const startTimer = () =>
  ({
    type: "START_TIMER",
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

export type Action =
  | ReturnType<typeof pauseTimer>
  | ReturnType<typeof resetTimer>
  | ReturnType<typeof timerTick>
  | ReturnType<typeof startTimer>;
