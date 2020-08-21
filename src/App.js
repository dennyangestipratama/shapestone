import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./Routes";
import Home from './Pages/Home'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
