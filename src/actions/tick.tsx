export const timerTick = (numTick: number) =>
  ({
    type: "TIMER_TICK",
    payload: {
      numTick,
    },
  } as const);

export type Action = ReturnType<typeof timerTick>;
