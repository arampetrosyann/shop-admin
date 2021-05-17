import { useMemo, useState } from "react";
import { useFormik } from "formik";

const useAddSlider = () => {
  const [addSlider, setAddSlider] = useState([]);
  const formik = useFormik({
    initialValues: {
      selectSlider: "",
      title: "",
      image: null,
    },
  });

  const fields = useMemo(() => {
    return [
      {
        field: "select",
        label: "Ընտրել սլայդեր",
        options: [
          { value: "Գլխավոր էջ", label: "Գլխավոր էջ" },
          { value: "Ապրանքների էջ", label: "Ապրանքների էջ" },
        ],
        onChange: (value) => formik.setFieldValue("selectSlider", value),
        style: { width: "200px" },
      },
    ];
  }, [formik]);

  const addFields = useMemo(() => {
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

  const handleAddForm = () => {
    setAddSlider(addFields);
  };

  return { fields, formik, addSlider, handleAddForm };
};

export default useAddSlider;
