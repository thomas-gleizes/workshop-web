import React from "react";
import { Redirect } from "react-router-dom";

import { useStorage } from "../helpers/hooks";
import { AUTH_TOKEN, IS_LOGIN } from "../helpers/localstorageKey";
import LoginForm from "../components/LoginForm";

const Authentification = () => {
  const isLog = useStorage(IS_LOGIN);
  const token = useStorage(AUTH_TOKEN);

  if (isLog) return <Redirect to="/vote" />;
  if (token) return <Redirect to={`/authentification/verification/${token}`} />;

  return (
    <div className="mx-auto">
      <LoginForm />
    </div>
  );
};

export default Authentification;
