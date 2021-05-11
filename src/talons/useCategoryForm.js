import { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Լրացրեք դաշտը"),
  parent: Yup.string(),
});

const useCategoryForm = ({ type, defaultValues = {}, meta = {} }) => {
  const formik = useFormik({
    initialValues: {
      title: defaultValues.title || "",
      parent: "",
    },
    validationSchema,
    onSubmit: (values) => {},
    enableReinitialize: true,
  });

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
        field: "select",
        label: "Ծնող",
        options: [
          { value: "Բաժակ", label: "Բաժակ" },
          { value: "Գրիչ", label: "Գրիչ" },
          { value: "Նվեր քարտ", label: "Նվեր քարտ" },
        ],
        onChange: (value) => formik.setFieldValue("parent", value),
      },
    ];
  }, [formik]);

  return { fields, formik };
};

export default useCategoryForm;
