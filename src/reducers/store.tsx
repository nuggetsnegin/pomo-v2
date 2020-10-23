import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import workTimerReducer from "./work";
import breakTimeReducer from "./break";
import rootSaga from "../sagas";
import logger from "redux-logger"; //for debugging

const appReducer = combineReducers({
  workTimer: workTimerReducer,
  breakTimer: breakTimeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
