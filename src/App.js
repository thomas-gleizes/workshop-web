import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from "./routes";

const App = () => {
  return (
    <div className="m-4">
      <Router>
        <Switch>
          {routes.map(({ component, path }, index) => (
            <Route key={index} path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
