import React, { useCallback } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";

const useForm = () => {
  const getField = useCallback((field, props) => {
    let result = null;

    switch (field) {
      case "input":
        result = <Input {...props} />;
        break;
      case "checkbox":
        result = <Checkbox {...props} />;
        break;
      case "select":
        result = <Select {...props} />;
        break;
      default:
        result = <Input {...props} />;
        break;
    }

    return result;
  }, []);

  return { getField };
};

export default useForm;
