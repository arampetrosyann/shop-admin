import { useCallback, useMemo, useState } from "react";

const useAddSlider = () => {
  const [sliderContent, setSliderContent] = useState({
    sliderName: "",
    content: [{ inputValue: "", sliderImage: null, onError: false }],
  });

  const handleSliderName = (e) => {
    setSliderContent({ ...sliderContent, sliderName: e.target.value });
  };

  const handleInputValue = useCallback(
    (i, e) => {
      const values = { ...sliderContent };
      values.content[i][e.target.name] = e.target.value;
      setSliderContent(values);
    },
    [sliderContent]
  );

  const handleImage = useCallback(
    (i, file) => {
      const values = { ...sliderContent };
      values.content[i].sliderImage = file[0].preview.url;
      setSliderContent(values);
    },
    [sliderContent]
  );

  const handleRemoveImg = useCallback(
    (i) => {
      const values = { ...sliderContent };
      values.content[i].sliderImage = null;
      setSliderContent(values);
    },
    [sliderContent]
  );

  const handleAddForm = useCallback(() => {
    setSliderContent({
      ...sliderContent,
      content: [
        ...sliderContent.content,
        { inputValue: "", sliderImage: null },
      ],
    });
  }, [sliderContent]);

  const handleRemoveForm = useCallback(
    (i) => {
      const list = { ...sliderContent };
      list.content.splice(i, 1);
      setSliderContent(list);
    },
    [sliderContent]
  );

  console.log(sliderContent, 88);

  const addSlider = () => {
    const list = { ...sliderContent };
    const a = list.content.filter((item) => {
      return item.sliderImage === null;
    });
    console.log(list, 66);
    if (a.length === list.length) {
      console.log(11111);
    } else {
      setSliderContent({
        ...sliderContent,
        onError: true,
      });
    }
  };

  return {
    sliderContent,
    handleSliderName,
    handleInputValue,
    handleAddForm,
    handleRemoveForm,
    handleImage,
    handleRemoveImg,
    addSlider,
  };
};

export default useAddSlider;
