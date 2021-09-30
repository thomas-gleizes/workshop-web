import React from "react";
import { Redirect, useParams } from "react-router-dom";

import ValidateLogin from "../components/ValidateLogin";
import { useStorage } from "../helpers/hooks";
import { AUTH_TOKEN, IS_LOGIN } from "../helpers/localstorageKey";

const Verification = () => {
  const isLogin = useStorage(IS_LOGIN);
  const useToken = useStorage(AUTH_TOKEN);

  const { token } = useParams();

  if (isLogin) return <Redirect to="/vote" />;
  if (!useToken) return <Redirect to="/authentification/connexion" />;

  return (
    <div className="max-w-500 mx-auto mt-14">
      <div className="bg-gradient-to-b shadow-md rounded border-gray-300 border from-gray-50 to-gray-50 shadow px-7 py-4">
        <div>
          <h2 className="mx-auto text-xl my-1 text-center">Vérification du code</h2>
        </div>
        <ValidateLogin token={token} />
      </div>
    </div>
  );
};

export default Verification;
