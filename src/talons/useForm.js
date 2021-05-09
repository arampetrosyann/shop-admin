import React, { useCallback } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Files from "../components/Files";
import Radio from "../components/Radio";
import CheckboxGroup from "../components/Form/CheckboxGroup";

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
      case "checkbox-group":
        result = <CheckboxGroup {...props} />;
        break;
      case "select":
        result = <Select {...props} />;
        break;
      case "textarea":
        result = <Textarea {...props} />;
        break;
      case "files":
        result = <Files {...props} />;
        break;
      case "radio":
        result = <Radio {...props} />;
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
