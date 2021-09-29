import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Api from "../helpers/api";
import Field from "./form/Field";
import FeedBack from "./form/FeedBack";

const ValidateLogin = ({ token }) => {
  const initialValues = {
    code: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().test(
      "min length",
      "La taille du code est invalide.",
      (value) => value?.length >= 4
    ),
  });

  const handleSubmit = async (values) => {
    const payload = { ...values, token };

    try {
      const response = await Api.verify(payload);
    } catch (e) {
      console.log("E", e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full mx-auto mt-5">
            <Field
              name="code"
              placeholder="Code (exemple: 0000)"
              maxLength={4}
            />
            <FeedBack name="code" />
          </div>
          <div className="my-2 flex justify-center mt-14">
            <button
              type="submit"
              className="w-full px-8 py-2 shadow-lg hover:shadow bg-blue-500 hover:bg-green-500 disabled:bg-red-500 rounded text-white text-lg transition duration-100"
            >
              Valider
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ValidateLogin;
