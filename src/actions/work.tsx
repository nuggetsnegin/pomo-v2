export const startWorkTimer = () =>
  ({
    type: "START_WORK_TIMER",
  } as const);

export const pauseWorkTimer = () =>
  ({
    type: "PAUSE_WORK_TIMER",
  } as const);

export const resetWorkTimer = () =>
  ({
    type: "RESET_WORK_TIMER",
  } as const);

export const timerTick = (numTick: number) =>
  ({
    type: "TIMER_TICK",
    payload: {
      numTick,
    },
  } as const);

export type Action =
  | ReturnType<typeof pauseWorkTimer>
  | ReturnType<typeof resetWorkTimer>
  | ReturnType<typeof startWorkTimer>
  | ReturnType<typeof timerTick>;
