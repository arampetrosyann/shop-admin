import { useMemo } from "react";
// import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().min(0),
  brand: Yup.string(),
  description: Yup.string(),
  categories: Yup.array().of(Yup.string()),
  image: Yup.mixed(),
});

const useProductForm = ({ type }) => {
  // const { id } = useParams();
  // const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      brand: "",
      description: "",
      categories: [],
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  const fields = useMemo(() => {
    return [
      {
        field: "input",
        type: "text",
        name: "title",
        id: "title",
        value: formik.values.title,
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
        type: "text",
        name: "brand",
        id: "brand",
        value: formik.values.brand,
        placeholder: "Ապրանքանիշ",
        onChange: formik.handleChange,
      },
      {
        field: "checkbox-group",
        heading: "Կատեգորիաներ",
        name: "categories",
        id: "categories",
        inputs: [
          {
            value: "Բաժակ",
            label: "Բաժակ",
          },
          {
            value: "Գրիչ",
            label: "Գրիչ",
          },
          {
            value: "Նվեր քարտ",
            label: "Նվեր քարտ",
          },
        ],
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
        rows: 8,
        placeholder: "Նկարագրություն",
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

  return { fields, formik };
};

export default useProductForm;
