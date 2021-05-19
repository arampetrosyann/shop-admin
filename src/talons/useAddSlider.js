import { useCallback, useMemo, useState } from "react";

const useAddSlider = () => {
  const [label, setLabel] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderContent, setSliderContent] = useState([]);

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

  const handleInputValue = useCallback(
    (i, e) => {
      const values = [...sliderContent];
      values[i].inputValue = e.target.value;
      setSliderContent(values);
    },
    [sliderContent]
  );

  const handleAddForm = useCallback(() => {
    setSliderContent([
      ...sliderContent,
      { inputValue: "", sliderImage: null },
    ]);
  }, [sliderContent]);

  const handleRemoveForm = useCallback(
    (i) => {
      const list = [...sliderContent];
      list.splice(i, 1);
      setSliderContent(list);
    },
    [sliderContent]
  );

  const handleImage = (i, files) => {
    const values = [...sliderContent];
    values[i].sliderImage = files[0].preview.url;
    setSliderContent(values);
  };

  const handleRemoveImg = (i) => {
    const values = [...sliderContent];
    values[i].sliderImage = null;
    setSliderContent(values);
  };

  return {
    options,
    label,
    inputValue,
    sliderContent,
    handleInputValue,
    handleSelect,
    handleAddForm,
    handleRemoveForm,
    handleImage,
    handleRemoveImg,
  };
};

export default useAddSlider;
