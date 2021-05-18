import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Legal from "./components/Legal";
import Explore from "./components/Explore";
import ComingSoon from "./components/ComingSoon";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/legal" component={Legal} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
