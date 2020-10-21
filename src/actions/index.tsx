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

export const addTimer = () =>
  ({
    type: "ADD_TIMER",
  } as const);

type Action =
  | ReturnType<typeof pauseTimer>
  | ReturnType<typeof resetTimer>
  | ReturnType<typeof addTimer>
  | ReturnType<typeof startTimer>;
