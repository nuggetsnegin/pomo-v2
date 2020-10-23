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
