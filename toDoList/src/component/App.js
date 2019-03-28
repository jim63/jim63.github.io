import React from "react";
import { Route } from "react-router-dom";

import List from "./List";
import Input from "./Input";

const App = () => {
  return (
    <div className="container">
      <h1>TO DO LIST</h1>

      <Route path="/" exact component={() => <Input />} />
      <Route path="/" exact component={() => <List routeStatus="0" />} />
      <Route path="/active" component={() => <List routeStatus="1" />} />
      <Route path="/done" component={() => <List routeStatus="2" />} />
    </div>
  );
};

export default App;
