import React from "react";
import defaultClasses from "./updateUser.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useUpdateUser from "../../talons/useUpdateUser";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";

const UpdateUser = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik } = useUpdateUser();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Փոխել հաճախորդի Տվյալները</h1>
        <Form
          action="/"
          method="POST"
          btnValue="թարմացնել"
          fields={fields}
          disableBtn={!formik.isValid}
          onSubmit={formik.handleSubmit}
        />
      </div>
    </MenuWrapper>
  );
};

export default UpdateUser;
