import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [dataForm, setDataForm] = useState(initialState);
  const reset = () => {
    setDataForm(initialState);
  };

  const handleChange = ({target}) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value
    });
  };
  return [dataForm, handleChange, reset];
};