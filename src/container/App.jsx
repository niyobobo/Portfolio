import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/navigation";
import Welcome from "./welcome";
import Work from "./work";
import Profile from "./profile";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/work" exact component={Work} />
            <Route path="/resume" exact component={""} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Container;
