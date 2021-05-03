import { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Սխալ էլ. հասցե").required(),
  password: Yup.string().required(),
});

const useSignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "email",
        id: "email",
        value: formik.values.email,
        placeholder: "Էլ. հասցե",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "password",
        name: "password",
        id: "password",
        value: formik.values.password,
        placeholder: "Գաղտնաբառ",
        onChange: formik.handleChange,
      },
    ];
  }, [formik.values]);

  return { fields, formik };
};

export default useSignIn;
