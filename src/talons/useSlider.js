import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { ADD_SLIDER } from "../graphql/mutations";

let schema = yup.object().shape({
  sliderName: yup.string().required(),
  editorValue: yup.string().required(),
  sliderImage: yup.string().required(),
});

const useAddSlider = () => {
  const { id } = useParams();
  const [addSliders] = useMutation(ADD_SLIDER);
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

  const handleSliderName = (e) => {
    setSliderContent({
      ...sliderContent,
      sliderName: e.target.value,
      sliderNameError: false,
    });
  };

  const handleEditorValue = useCallback(
    (i, e) => {
      setSliderContent((values) => {
        values.content[i].editorValue = e;
        values.content[i].editorError = false;
        return { ...values };
      });
    },
    [sliderContent]
  );

  const handleImage = useCallback(
    (i, file) => {
      const values = { ...sliderContent };
      values.content[i].sliderImage = file[0].preview.url;
      values.content[i].imageError = false;
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

  const addSlider = useCallback(() => {
    const list = { ...sliderContent };
    yup
      .reach(schema, "sliderName")
      .validate(list.sliderName)
      .then((res) => {
        list.sliderNameError = false;
        setSliderContent(list);
      })
      .catch((err) => {
        list.sliderNameError = true;
        setSliderContent(list);
      });

    list.content.map((el) => {
      return yup
        .reach(schema, "editorValue")
        .validate(el.editorValue)
        .then((res) => {
          setSliderContent((values) => {
            el.editorError = false;
            return { ...values };
          });
        })
        .catch((err) => {
          setSliderContent((values) => {
            el.editorError = true;
            return { ...values };
          });
        });
    });

    list.content.map((el) => {
      return yup
        .reach(schema, "sliderImage")
        .validate(el.sliderImage)
        .then((res) => {
          setSliderContent((values) => {
            el.imageError = false;
            return { ...values };
          });
        })
        .catch((err) => {
          setSliderContent((values) => {
            el.imageError = true;
            return { ...values };
          });
        });
    });
    addSliders({
      variables: {
        title: sliderContent.content,
        name: sliderContent.sliderName,
        image: sliderContent.content.sliderImage,
      },
    });
  }, [sliderContent]);

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
