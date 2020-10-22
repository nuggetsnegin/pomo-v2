import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./reducers/store";
import Timer from "./container/Timer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Timer />
      </div>
    </Provider>
  );
}

export default App;
