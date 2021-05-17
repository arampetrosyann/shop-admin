import { useMemo } from "react";
import { useFormik } from "formik";

const useAddSlider = () => {
  const formik = useFormik({
    initialValues: {
      parent: "",
    },
    onSubmit: (values) => {},
    enableReinitialize: true,
  });

  const fields = useMemo(() => {
    return [
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

export default useAddSlider;
