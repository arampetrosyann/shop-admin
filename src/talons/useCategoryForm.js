import { useMemo, useContext, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import CategoryContext from "../context/category";
import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../graphql/mutations";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Լրացրեք դաշտը"),
  parent: Yup.string(),
});

const useCategoryForm = ({ type }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    data,
    setFormType,
    refetch,
  } = useContext(CategoryContext);
  const [addCategory] = useMutation(ADD_CATEGORY);
  const [updateCategory] = useMutation(UPDATE_CATEGORY);
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const formik = useFormik({
    initialValues: {
      title: selectedCategory.name || "",
      parent: selectedCategory.parent || "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!values.title.trim() || selectedCategory.id === values.parent) {
        return;
      }

      if (type === "add") {
        await addCategory({ variables: { categoryData: values } });
      } else if (type === "update" && selectedCategory.id) {
        await updateCategory({
          variables: {
            categoryId: selectedCategory.id,
            categoryData: values,
          },
        });
      }

      refetch();
    },
    enableReinitialize: true,
  });

  const selectOptions = useMemo(() => {
    let result = [];

    if (data) {
      result = data.items.map(({ id, title }) => {
        return { value: id, label: title };
      });
    }

    result.unshift({ value: "", label: "------" });

    return result;
  }, [data]);

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
        label: type === "add" ? "------" : "Ծնող",
        options: selectOptions,
        onChange: (value) => formik.setFieldValue("parent", value),
      },
    ];
  }, [formik, type]);

  const handleDeleteBtn = useCallback(async () => {
    await deleteCategory({
      variables: { categoryId: selectedCategory.id },
    });

    refetch();

    setFormType("add");
    setSelectedCategory({});
  }, [selectedCategory]);

  return { fields, formik, handleDeleteBtn };
};

export default useCategoryForm;
