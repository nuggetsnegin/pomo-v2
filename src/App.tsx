import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./reducers/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
