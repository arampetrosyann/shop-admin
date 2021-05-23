import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

let schema = yup.object().shape({
  sliderName: yup.string().required(),
  inputValue: yup.string().required(),
  sliderImage: yup.string().required(),
});

const useAddSlider = () => {
  const { id } = useParams();
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
        { inputValue: "", sliderImage: null, onError: false },
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

  const addSlider = () => {
    const list = { ...sliderContent };

    const promises = list.content.map((el, i) => {
      return schema.isValid({
        sliderName: list.sliderName,
        inputValue: el.inputValue,
        sliderImage: el.sliderImage,
      });
    });

    Promise.all(promises).then((res) => {
      res.forEach((valid, i) => {
        list.content[i].onError = !valid;
      });
      setSliderContent(list);
    });
  };

  return {
    id,
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
