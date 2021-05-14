import { useMemo, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/client";
// import { UPDATE_CUSTOMER } from "../graphql/mutations";
// import { GET_USER } from "../graphql/queries";

const validationSchema = Yup.object().shape({
  sliderName: Yup.string(),
  imageName: Yup.string(),
  image: Yup.mixed(),
});

const useUpdateUser = () => {
  const { id } = useParams();
  const client = useApolloClient();
  //   const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      sliderName: "",
      imageName: "",
      image: null,
    },
    validationSchema,
    onSubmit: async () => {
      history.replace("/sliders");
    },
  });

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "sliderName",
        id: "sliderName",
        value: formik.values.sliderName,
        placeholder: "Սլայդերի անուն",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "text",
        name: "imageName",
        id: "imageName",
        value: formik.values.imageName,
        placeholder: "Նկարի անուն",
        onChange: formik.handleChange,
      },
      {
        field: "files",
        placeholder: "Ավելացնել նկար",
        accepts: ["image/*"],
        maxFileSize: 10000000,
        onChange: (files) => {
          formik.setFieldValue("image", files[0]);
        },
      },
    ];
  }, [formik]);

  useEffect(() => {}, []);

  return { fields, formik };
};

export default useUpdateUser;
