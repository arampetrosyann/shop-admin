import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER } from "../graphql/mutations";

const validationSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string().email("Սխալ Էլ. հասցե").required("Լրացրեք դաշտը"),
  password: Yup.string().required("Լրացրեք դաշտը"),
});

const useAddUser = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password, firstname, lastname }) => {
      setDisableBtn(true);

      await addCustomer({
        variables: { email, password, firstname, lastname },
      });

      history.push("/");
    },
  });

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "firstname",
        id: "firstname",
        value: formik.values.firstname,
        placeholder: "Անուն",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "text",
        name: "lastname",
        id: "lastname",
        value: formik.values.lastname,
        placeholder: "Ազգանուն",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "text",
        name: "email",
        id: "email",
        error: formik.touched.email ? formik.errors.email : "",
        value: formik.values.email,
        placeholder: "Էլ. հասցե",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      },
      {
        field: "input",
        type: "password",
        name: "password",
        id: "password",
        error: formik.touched.password ? formik.errors.password : "",
        value: formik.values.password,
        placeholder: "Գաղտնաբառ",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      },
    ];
  }, [formik]);

  return { fields, formik, disableBtn };
};

export default useAddUser;
