import { put, delay, select, all, call } from "redux-saga/effects";
import { getTimer } from "../selectors";

export function* decrementTimer() {
  while (true) {
    const currTimer = yield select(getTimer);
    if (currTimer <= 1500 && currTimer > 0) {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export default function* rootSaga() {
  yield all([call(decrementTimer)]);
}
