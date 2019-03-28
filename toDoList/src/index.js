import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashRouter } from "react-router-dom";

require("./css/index.css");
import App from "./component/App";
import Class from "./component/Class";

import reducers from "./reducers";

ReactDOM.render(
  <HashRouter>
    <Provider store={createStore(reducers)}>
      <Class />
      <App />
    </Provider>
  </HashRouter>,
  document.querySelector("#root")
);
