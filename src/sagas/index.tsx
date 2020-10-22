import { put, delay, select, all, call } from "redux-saga/effects";
import { getTimer } from "../selectors";

export function* decrementTimer() {
  while (true) {
    //const currTime1r: number = yield select(getTimer); - we dont know the return type of getTimer, we're just typing currTimer
    const currTimer = getTimer(yield select()); //ts can infer return type of getTimer
    if (currTimer <= 1500 && currTimer > 0) {
      yield put({ type: "TIMER_TICK" });
    }
    yield delay(1000);
  }
}

export default function* rootSaga() {
  yield all([call(decrementTimer)]);
}
