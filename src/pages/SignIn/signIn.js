import React, { useMemo } from "react";
import defaultClasses from "./signIn.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "../../components/Form";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Սխալ էլ. հասցե"),
  password: Yup.string(),
});

const SignIn = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

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

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.iconContainer}>
          <img
            src="https://www.freeiconspng.com/uploads/user-login-icon-14.png"
            width="80px"
            alt="Login icon"
          />
        </div>
        <Form
          action="/"
          method="POST"
          btnValue="Մուտք"
          fields={fields}
          onSubmit={formik.handleSubmit}
          classes={{ submitBtn: classes.submitBtn }}
        />
      </div>
    </div>
  );
};

export default SignIn;
