import { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../graphql/queries";

const useCategory = () => {
  const [formType, setFormType] = useState("add");
  const [selectedCategory, setSelectedCategory] = useState({});
  const { data, refetch } = useQuery(CATEGORIES);

  const handleNodeClick = useCallback(
    (node) => {
      setFormType("update");
      setSelectedCategory(node);
    },
    [selectedCategory]
  );

  const handleBtnClick = useCallback(() => {
    setFormType("add");
    setSelectedCategory({});
  }, []);

  return {
    data: data && data.adminGetCategories,
    refetch,
    formType,
    setFormType,
    handleNodeClick,
    handleBtnClick,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useCategory;
