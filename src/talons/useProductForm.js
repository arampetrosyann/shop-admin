import { useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../graphql/mutations";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Լրացրեք դաշտը"),
  brand: Yup.string().required("Լրացրեք դաշտը"),
  description: Yup.string().required("Լրացրեք դաշտը"),
  price: Yup.number()
    .min(0, "Գինը պետք է լինի մեծ 0-ից")
    .required("Լրացրեք դաշտը"),
  categories: Yup.array(),
});

const useProductForm = ({ type }) => {
  const { id } = useParams();
  const history = useHistory();
  const { items, isDataFetched } = useSelector(
    (state) => state.categories
  );
  const [addProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      brand: "",
      description: "",
      price: 0,
      categories: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      let result = values;

      if (values.image) {
        const res = await fetch(
          "https://shop-yereone.herokuapp.com/single",
          {
            method: "POST",
            body: values.image,
            mode: "cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        result = { ...values, image: values.image.name };
      }

      if (type === "add") {
        await addProduct({
          variables: { productInput: result },
        });
      } else if (type === "update") {
        await updateProduct({
          variables: { productId: id, productInput: result },
        });
      }

      history.replace("/products");
    },
  });

  const checkboxInputs = useMemo(() => {
    let result = [];

    if (isDataFetched) {
      result = items.map(({ id, title }) => {
        return { value: id, label: title };
      });
    }

    return result;
  }, [items]);

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "title",
        id: "title",
        value: formik.values.title,
        error: formik.touched.title ? formik.errors.title : "",
        placeholder: "Անվանում",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      },
      {
        field: "input",
        type: "number",
        name: "price",
        id: "price",
        value: formik.values.price,
        error: formik.touched.price ? formik.errors.price : "",
        placeholder: "Գին",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      },
      {
        field: "input",
        type: "text",
        name: "brand",
        id: "brand",
        value: formik.values.brand,
        error: formik.touched.brand ? formik.errors.brand : "",
        placeholder: "Ապրանքանիշ",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      },
      {
        field: "checkbox-group",
        heading: "Կատեգորիաներ",
        name: "categories",
        id: "categories",
        inputs: checkboxInputs,
        onChange: (values) => {
          formik.setFieldValue("categories", values);
        },
      },
      {
        field: "textarea",
        type: "text",
        name: "description",
        id: "description",
        value: formik.values.description,
        error: formik.touched.description ? formik.errors.description : "",
        rows: 8,
        placeholder: "Նկարագրություն",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
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

  return { fields, formik };
};

export default useProductForm;
