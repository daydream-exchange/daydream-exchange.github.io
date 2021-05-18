import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
