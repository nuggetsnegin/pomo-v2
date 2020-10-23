import { put, delay, all, call } from "redux-saga/effects";
import { timerTick } from "../actions/tick";

export function* timerTicking() {
  while (true) {
    yield put(timerTick(1));
    yield delay(1000);
  }
}

export default function* rootSaga() {
  yield all([call(timerTicking)]);
}
