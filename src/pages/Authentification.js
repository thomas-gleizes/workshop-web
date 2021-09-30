import React from "react";
import { Redirect } from "react-router-dom";

import { useStorage } from "../helpers/hooks";
import { AUTH_TOKEN, IS_LOGIN } from "../helpers/localstorageKey";
import LoginForm from "../components/LoginForm";

import franceConnect from "../assets/img/Illustration-FranceConnect.png";

const Authentification = () => {
  const isLog = useStorage(IS_LOGIN);
  const token = useStorage(AUTH_TOKEN);

  if (isLog) return <Redirect to="/vote" />;
  if (token) return <Redirect to={`/authentification/verification/${token}`} />;

  return (
    <div className="mx-auto my-36 my-3 bg-grey-100 max-w-700 border-2 bg-grey-50 rounded shadow-xl px-9 py-2">
      <img className="mx-auto" width={400} src={franceConnect} alt="france connect" />
      <div className="w-10/12 mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Authentification;
