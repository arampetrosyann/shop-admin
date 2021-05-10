import { useMemo } from "react";
// import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Լրացրեք դաշտը"),
  parent: Yup.string(),
});

const useCategoryForm = ({ type }) => {
  // const { id } = useParams();
  // const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: "",
      parent: "",
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
