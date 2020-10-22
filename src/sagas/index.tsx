import { put, delay, select, all, call } from "redux-saga/effects";
import { getTimer, getStatus, getBreakTimer } from "../selectors";

export function* decrementWorkTimer() {
  while (true) {
    //const currTime1r: number = yield select(getTimer); - we dont know the return type of getTimer, we're just typing currTimer
    const currTimer = getTimer(yield select()); //ts can infer return type of
    const status = getStatus(yield select());
    if (currTimer <= 1500 && currTimer > 0 && status) {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export function* decrementBreakTimer() {
  while (true) {
    const currTimer = getBreakTimer(yield select());
    const status = getStatus(yield select());
    if (currTimer <= 1500 && currTimer) {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export default function* rootSaga() {
  yield all([call(decrementWorkTimer)]);
}
