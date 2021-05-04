import { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number(),
  discount: Yup.number(),
  quantity: Yup.number(),
  description: Yup.string(),
  shortDescription: Yup.string(),
});

const useAddProduct = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      discount: "",
      quantity: "",
      description: "",
      shortDescription: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "name",
        id: "name",
        value: formik.values.name,
        placeholder: "Անվանում",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "number",
        name: "price",
        id: "price",
        value: formik.values.price,
        placeholder: "Գին",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "number",
        name: "discount",
        id: "discount",
        value: formik.values.discount,
        placeholder: "Զեղչ",
        onChange: formik.handleChange,
      },
      {
        field: "input",
        type: "number",
        name: "quantity",
        id: "quantity",
        value: formik.values.quantity,
        placeholder: "Քանակ",
        onChange: formik.handleChange,
      },
      {
        field: "textarea",
        type: "text",
        name: "description",
        id: "description",
        value: formik.values.description,
        rows: 8,
        placeholder: "Նկարագրություն",
        onChange: formik.handleChange,
      },
      {
        field: "textarea",
        type: "text",
        name: "shortDescription",
        id: "shortDescription",
        value: formik.values.shortDescription,
        placeholder: "Կարճ Նկարագրություն",
        onChange: formik.handleChange,
      },
    ];
  }, [formik.values]);

  return { fields, formik };
};

export default useAddProduct;
