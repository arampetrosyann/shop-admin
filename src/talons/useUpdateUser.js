import { useMemo, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/client";
import { UPDATE_CUSTOMER } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";

const validationSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string().email("Սխալ Էլ. հասցե"),
  password: Yup.string(),
});

const useUpdateUser = () => {
  const { id } = useParams();
  const client = useApolloClient();
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
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
      if (!(email || password || firstname || lastname)) {
        return;
      }

      await updateCustomer({
        variables: {
          id,
          customerData: { email, password, firstname, lastname },
        },
      });

      history.replace("/");
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
  }, [formik]);

  useEffect(() => {
    (async () => {
      const res = await client.query({
        query: GET_USER,
        variables: { id },
      });

      const { firstname, lastname, email } = await res.data.adminCustomer;

      formik.resetForm({
        values: { firstname, lastname, email, password: "" },
      });
    })();
  }, []);

  return { fields, formik };
};

export default useUpdateUser;
