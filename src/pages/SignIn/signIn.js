import React from "react";
import defaultClasses from "./signIn.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useSignIn from "../../talons/useSignIn";
import Form from "../../components/Form";

const SignIn = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik } = useSignIn();

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
