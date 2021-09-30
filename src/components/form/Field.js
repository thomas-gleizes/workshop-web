import React, { useMemo } from "react";
import { useField } from "formik";

const Field = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  const color = useMemo(
    () => (meta.touched && meta.error ? "red" : "blue"),
    [meta]
  );

  return (
    <input
      {...rest}
      {...field}
      className={`w-full my-1 py-1 px-2 bg-transparent focus:bg-white border-b-2 border-${color}-400 text-lg focus:border-green-400 disabled:opacity-50 disabled:border-gray-200 transition duration-75`}
    />
  );
};

export default Field;
