import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaSpinner } from "react-icons/fa";

import Api from "../helpers/api";
import addToast, { TOAST_ERROR } from "../helpers/toastr";
import { IS_LOGIN } from "../helpers/localstorageKey";
import Field from "./form/Field";
import FeedBack from "./form/FeedBack";

const ValidateLogin = ({ token }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    code: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .test("min length", "La taille du code est invalide.", (value) => value?.length >= 4)
      .required("Veuillez renseigner votre code"),
  });

  const handleBack = () => {
    localStorage.clear();
  };

  const handleSubmit = async (values) => {
    try {
      if (values.code === "0000") {
        setTimeout(() => localStorage.setItem(IS_LOGIN, "oui"), 3000);
      } else {
        setLoading(true);

        const formData = new FormData();
        formData.append("auth", values.code);
        formData.append("token", token);

        const response = await Api.verify(formData);

        if (response.status === 200) {
          localStorage.setItem(IS_LOGIN, "oui");
        }
      }
    } catch (e) {
      addToast("Code invalide !", TOAST_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full mx-auto mt-5">
            <Field
              name="code"
              placeholder="Code (pour passer cette étape: 0000)       "
              maxLength={4}
              disabled={loading}
            />
            <FeedBack name="code" />
          </div>
          <div className="my-2 flex justify-center mt-14">
            <button
              type="button"
              disabled={loading}
              onClick={handleBack}
              className="w-1/4 mr-3 px-8 py-2 shadow-lg hover:shadow bg-gray-200 disabled:opacity-50 text-center rounded text-lg transition duration-100"
            >
              Retour
            </button>
            <button
              disabled={loading}
              type="submit"
              className="flex justify-center w-full px-8 py-2 shadow-lg hover:shadow bg-blue-500 hover:bg-green-500 rounded text-white text-lg transition duration-100"
            >
              {loading ? (
                <>
                  <FaSpinner size={25} className="animate-spin" />
                </>
              ) : (
                "Valider"
              )}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ValidateLogin;
