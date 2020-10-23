import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./work";
import rootSaga from "../sagas";
import logger from "redux-logger"; //for debugging

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
