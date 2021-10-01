import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from "./routes";

import logo from "./assets/img/logo.svg";
import { useStorage } from "./helpers/hooks";
import { IS_LOGIN } from "./helpers/localstorageKey";

const App = () => {
  const isLogin = useStorage(IS_LOGIN);

  return (
    <div className="">
      <header>
        <div className="w-full flex justify-between px-10 py-2 bg-gray-50 shadow-xl">
          <img src={logo} alt={logo} className="w-20" />

          <div className="my-auto">
            {isLogin && <button onClick={() => localStorage.clear()} className="px-5 py-2 bg-blue-500 text-white rounded"> Déconnexion</button>}
          </div>
        </div>
      </header>
      <main className="m-4">
        <Router>
          <Switch>
            {routes.map(({ component, path }, index) => (
              <Route key={index} path={path} component={component} />
            ))}
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
