import React from "react";
import { Redirect } from "react-router-dom";

import { useLogin } from "../helpers/hooks";
import LoginForm from "../components/LoginForm";

const Authentification = () => {
  const isLog = useLogin();

  if (isLog) return <Redirect to="/vote" />;

  return (
    <div className="mx-auto">
      <LoginForm />
    </div>
  );
};

export default Authentification;
