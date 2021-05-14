import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useMutation } from "@apollo/client";
// import { ADD_SLIDER } from "../graphql/mutations";

const validationSchema = Yup.object().shape({
  sliderName: Yup.string(),
  imageName: Yup.string(),
  image: Yup.mixed(),
});

const useAddSlider = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  //   const [addSlider] = useMutation(ADD_SLIDER);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      sliderName: "",
      imageName: "",
      image: null,
    },
    validationSchema,
    onSubmit: async () => {},
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

  return { fields, formik, disableBtn };
};

export default useAddSlider;
