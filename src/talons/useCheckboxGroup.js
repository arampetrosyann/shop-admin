import { useCallback, useState } from "react";

const useCheckboxGroup = (onChange) => {
  const [values, setValues] = useState([]);

  const handleOnChange = useCallback(
    ({ target }) => {
      let newValues = [];

      if (values.includes(target.value)) {
        newValues = values.filter((elem) => {
          return elem !== target.value;
        });
      } else {
        newValues = [...values, target.value];
      }

      onChange(newValues);
      setValues(newValues);
    },
    [values, onChange]
  );

  return { values, handleOnChange };
};

export default useCheckboxGroup;
