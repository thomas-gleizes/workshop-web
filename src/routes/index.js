import Authentification from "../pages/Authentification";
import Verification from "../pages/Verification";

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
    component: () => <></>,
  },
  {
    path: "*",
    exact: true,
    component: Authentification,
  },
];
