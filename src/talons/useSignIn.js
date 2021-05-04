import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../graphql/mutations";
import { setAdminData } from "../store/user/action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Սխալ էլ. հասցե").required(),
  password: Yup.string().required(),
});

const useSignIn = () => {
  const [signIn] = useMutation(SIGN_IN);

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      const res = await signIn({ variables: { email, password } });

      const { firstname, lastname, token } = await res.data.adminLogin;

      await dispatch(
        setAdminData({
          firstName: firstname,
          lastName: lastname,
          signedIn: true,
          isDataFetched: true,
        })
      );

      localStorage.setItem("authorization", token);

      history.replace("/");
    },
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
