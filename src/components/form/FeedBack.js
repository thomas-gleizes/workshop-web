import React from "react";
import { useField } from "formik";

const FeedBack = ({ name }) => {
  const [_, meta] = useField(name);

  if (!(meta.touched && meta.error)) return null;
  return <div className="text-red-500 text-sm">{meta.error}</div>;
};

export default FeedBack;
