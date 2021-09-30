import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaSpinner } from "react-icons/fa";

import Api from "../helpers/api";
import addToast, { TOAST_ERROR } from "../helpers/toastr";
import { AUTH_TOKEN } from "../helpers/localstorageKey";
import Field from "./form/Field";
import FeedBack from "./form/FeedBack";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    id: "kskZpogSjsfe",
    password: "azerty123",
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Veuillez indiquer votre id."),
    password: Yup.string().required("Veuillez indiquer votre mot de passe."),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("password", values.password);

      const { data } = await Api.login(formData);

      localStorage.setItem(AUTH_TOKEN, data.token);
    } catch (e) {
      addToast(e.error || "Une erreur est survenue", TOAST_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <div className="mb-2">
              <Field type="text" name="id" placeholder="id" disabled={loading} />
              <FeedBack name="id" />
            </div>
          </div>
          <div className="my-4">
            <Field type="password" name="password" placeholder="password" disabled={loading} />
            <FeedBack name="password" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex justify-center rounded-sm w-3/4 mx-auto mt-16 mb-4 py-3 shadow-lg hover:shadow bg-blue-500 hover:bg-green-500 disabled:bg-gray-400 disabled:opacity-50 rounded text-white text-lg transform hover:scale-105 transition duration-100"
          >
            Connexion
            {loading && (
              <i className="ml-5">
                <FaSpinner className="animate-spin my-auto" size={26} />
              </i>
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
