import { Redirect } from "react-router-dom";

import Authentification from "../pages/Authentification";
import Verification from "../pages/Verification";
import Vote from "../pages/Vote";

export const routes = [
  {
    path: "/authentification/connexion",
    exact: true,
    component: Authentification,
  },
  {
    path: "/authentification/verification/:token",
    exact: true,
    component: Verification,
  },
  {
    path: "/vote",
    exact: true,
    component: Vote,
  },
  {
    path: "*",
    exact: true,
    component: () => <Redirect to="/vote" />,
  },
];
