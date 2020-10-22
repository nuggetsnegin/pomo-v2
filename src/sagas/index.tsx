import { put, delay, select, all, call } from "redux-saga/effects";
import {
  getTimer,
  getStatus,
  getBreakTimer,
  getIsBreakTime,
} from "../selectors";

export function* decrementWorkTimer() {
  while (true) {
    // only decrement your work timer if it's active
    // and the decrement happens on TIMER_TICK
    // same for the break timer
    // then you can have one saga dispatching TIMER_TICK at a time
    const currTimer = getTimer(yield select()); //ts can infer return type of
    const status = getStatus(yield select());
    const workType = getIsBreakTime(yield select());
    if (currTimer <= 1500 && currTimer > 0 && status && workType === "work") {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export function* decrementBreakTimer() {
  while (true) {
    const currTimer = getBreakTimer(yield select());
    const workType = getIsBreakTime(yield select());
    if (currTimer <= 300 && currTimer > 0 && workType === "break") {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export default function* rootSaga() {
  yield all([call(decrementWorkTimer), call(decrementBreakTimer)]);
}
