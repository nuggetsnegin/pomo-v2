import { put, delay, select, all, call } from "redux-saga/effects";
import {
  getTimer,
  getStatus,
  getBreakTimer,
  getIsBreakOrWorkTime,
} from "../selectors";

export function* decrementWorkTimer() {
  while (true) {
    const currWorkTimer = getTimer(yield select()); //ts can infer return type of
    const currBreakTimer = getBreakTimer(yield select());
    const status = getStatus(yield select());
    const isBreakOrWorkTime = getIsBreakOrWorkTime(yield select());
    if (
      currWorkTimer <= 1500 &&
      currWorkTimer > 0 &&
      status &&
      isBreakOrWorkTime === "work"
    ) {
      yield put({ type: "TIMER_TICK" });
    } else if (
      currBreakTimer <= 300 &&
      currBreakTimer > 0 &&
      isBreakOrWorkTime === "break"
    ) {
      console.log("hello");
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

// export function* decrementBreakTimer() {
//   while (true) {
//     const currTimer = getBreakTimer(yield select());
//     if (currTimer <= 300 && currTimer > 0) {
//       yield put({ type: "TIMER_TICK" });
//     }
//     yield delay(1000);
//   }
// }

export default function* rootSaga() {
  yield all([call(decrementWorkTimer)]);
}
