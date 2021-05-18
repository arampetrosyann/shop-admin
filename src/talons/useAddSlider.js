import { useCallback, useMemo, useState } from "react";

const useAddSlider = () => {
  const [label, setLabel] = useState(null);
  const [addForms, setAddForms] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sliderImages, setSliderImages] = useState([]);

  const options = useMemo(() => {
    return [
      { value: "Home slider", label: "Home slider" },
      { value: "Product slider", label: "Product slider" },
    ];
  }, []);

  const handleSelect = useCallback(
    (e) => {
      setLabel(e);
    },
    [label]
  );

  const handleAddForm = useCallback(() => {
    let form = `input-${addForms.length}`;
    setAddForms((prevState) => prevState.concat([form]));
  }, [addForms]);

  const handleInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  });

  return {
    options,
    label,
    addForms,
    inputValue,
    handleInputValue,
    handleSelect,
    handleAddForm,
  };
};

export default useAddSlider;
