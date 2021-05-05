import React from "react";
import defaultClasses from "./addUser.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useAddUser from "../../talons/useAddUser";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";

const AddUser = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik, disableBtn } = useAddUser();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել հաճախորդ</h1>
        <Form
          action="/"
          method="POST"
          btnValue="Ավելացնել"
          fields={fields}
          disableBtn={disableBtn}
          onSubmit={formik.handleSubmit}
        />
      </div>
    </MenuWrapper>
  );
};

export default AddUser;
