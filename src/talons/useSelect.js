import { useCallback, useState, useEffect } from "react";

const useSelect = (defaultLabel = "", onChange, classes) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [optionLabel, setOptionLabel] = useState(defaultLabel);

  const handleOnClick = useCallback(() => {
    setShowDropdown(true);
  }, []);

  const handleOptionClick = useCallback(
    ({ value, label }) => {
      setOptionLabel(label);
      setShowDropdown(false);

      onChange(value);
    },
    [onChange]
  );

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        !(e.target.className === classes.root) &&
        !(e.target.className === classes.option)
      ) {
        setShowDropdown(false);
      }
    });

    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (
          !e.target.className === classes.root &&
          !e.target.className === classes.option
        ) {
          setShowDropdown(false);
        }
      });
    };
  }, [classes]);

  return { showDropdown, optionLabel, handleOnClick, handleOptionClick };
};

export default useSelect;