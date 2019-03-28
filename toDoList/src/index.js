import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

require("./css/index.css");
import App from "./component/App";
import Class from "./component/Class";

import reducers from "./reducers";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <Class />
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
