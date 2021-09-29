import React from "react";
import { Redirect } from "react-router-dom";

import { useLogin } from "../helpers/hooks";

const Vote = () => {
  const isLogin = useLogin();

  if (!isLogin) return <Redirect to="authentification/connexion" />;

  return (
    <div>
      <h1>Vote</h1>
    </div>
  );
};

export default Vote;
