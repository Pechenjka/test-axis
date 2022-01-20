import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({ name: "", value: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, name: name, value: value });
  };

  return { values, handleChange };
};
