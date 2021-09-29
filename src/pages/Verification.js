import React from "react";
import { useParams } from "react-router-dom";
import ValidateLogin from "../components/ValidateLogin";

const Verification = () => {
  const { token } = useParams();

  return (
    <div className="max-w-500 mx-auto mt-14">
      <div className="bg-gradient-to-b shadow-md rounded border-gray-300 border from-gray-50 to-gray-50 shadow px-7 py-4">
        <ValidateLogin token={token} />
      </div>
    </div>
  );
};

export default Verification;
