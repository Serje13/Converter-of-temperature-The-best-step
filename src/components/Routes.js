import React from "react";
import { Switch, Route } from "react-router-dom";

import Issue1 from "./Issue1/Issue1";
import Issue3 from "./Issue3/Issue3";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Issue1} />
    <Route path="/issue3" component={Issue3} />
  </Switch>
);

export default Routes;
