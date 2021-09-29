import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaSpinner } from "react-icons/fa";

import Api from "../helpers/api";
import addToast, { TOAST_ERROR } from "../helpers/toastr";
import Field from "./form/Field";
import FeedBack from "./form/FeedBack";

import franceConnect from "./../assets/img/Illustration-FranceConnect.png";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    identifiant: "29ské4Fksj42kfskfap4",
    password: "azerty123",
  };

  const validationSchema = Yup.object().shape({
    identifiant: Yup.string().required("Veuillez indiquer votre identifiant."),
    password: Yup.string().required("Veuillez indiquer votre mot de passe."),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const response = await Api.login(values);

      if (response.data.success) {
      }
    } catch (e) {
      addToast(e.error || "Une erreur est survenue", TOAST_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 my-3 bg-grey-100 max-w-700 border bg-grey-50 shadow-lg px-9 py-2">
      <div>
        <img
          className="mx-auto"
          width={400}
          src={franceConnect}
          alt="france connect"
        />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="my-4">
                <div className="mb-2">
                  <Field
                    type="text"
                    name="identifiant"
                    placeholder="identifiant"
                    disabled={loading}
                  />
                  <FeedBack name="identifiant" />
                </div>
              </div>
              <div className="my-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  disabled={loading}
                />
                <FeedBack name="password" />
              </div>
              <div className="">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center rounded-sm w-1/2 mx-auto mt-16 mb-4 py-3 shadow-lg hover:shadow bg-blue-500 hover:bg-green-500 disabled:bg-gray-400 disabled:opacity-50 rounded text-white text-lg transition duration-100"
                >
                  Connexion
                  {loading && (
                    <i className="ml-5">
                      <FaSpinner className="animate-spin my-auto" size={26} />
                    </i>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
