import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

let schema = yup.object().shape({
  sliderName: yup.string().required(),
  editorValue: yup.string().required(),
  sliderImage: yup.string().required(),
});

const useAddSlider = () => {
  const { id } = useParams();
  const [sliderContent, setSliderContent] = useState({
    sliderName: "",
    sliderNameError: false,
    content: [
      {
        editorValue: "",
        sliderImage: null,
        editorError: false,
        imageError: false,
      },
    ],
  });

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  });

  console.log(sliderContent, 99);

  const handleSliderName = (e) => {
    setSliderContent({ ...sliderContent, sliderName: e.target.value });
  };

  const handleEditorValue = useCallback(
    (i, e) => {
      setSliderContent((values) => {
        values.content[i].editorValue = e;
        return { ...values };
      });
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
        {
          editorValue: "",
          sliderImage: null,
          editorError: false,
          imageError: false,
        },
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

    schema
      .validate({ sliderName: list.sliderName })
      .then((res) => {
        list.sliderNameError = false;
        setSliderContent(list);
      })
      .catch((err) => {
        list.sliderNameError = true;
        setSliderContent(list);
      });

    list.content.map((el) => {
      return schema
        .validate({
          editorValue: el.editorValue,
          sliderImage: el.sliderImage,
        })
        .then((res) => {
          console.log(res, 11);
        })
        .catch((err) => {
          console.log(err, 22);
        });
    });

    // const promises = list.content.map((el) => {
    //   return schema.isValid({
    //     sliderName: list.sliderName,
    //     editorValue: el.editorValue,
    //     sliderImage: el.sliderImage,
    //   });
    // });

    // Promise.all(promises).then((res) => {
    //   res.forEach((valid, i) => {
    //     console.log(list);
    //     list.sliderNameError = !valid;
    //     list.content[i].editorError = !valid;
    //     list.content[i].imageError = !valid;
    //     // list.content[i].onError = !valid;
    //   });
    //   setSliderContent(list);
    // });
  };

  return {
    id,
    sliderContent,
    handleSliderName,
    handleEditorValue,
    handleAddForm,
    handleRemoveForm,
    handleImage,
    handleRemoveImg,
    addSlider,
  };
};

export default useAddSlider;
