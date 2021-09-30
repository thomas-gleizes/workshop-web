import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useStorage } from "../helpers/hooks";
import { IS_LOGIN } from "../helpers/localstorageKey";

const Vote = () => {
  const [candidats, setCandidats] = useState([]);
  const isLogin = useStorage(IS_LOGIN);

  if (!isLogin) return <Redirect to="authentification/connexion" />;

  return (
    <div>
      <h1>Vote</h1>
      <div>
        {candidats.map((candidat, index) => (
          <div key={index}></div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="text-white bg-gradient-to-tr from-blue-600 to-blue-500 py-2 px-24 rounded shadow transform transition duration-100 hover:scale-105">
          Vote blanc
        </button>
      </div>
    </div>
  );
};

export default Vote;
