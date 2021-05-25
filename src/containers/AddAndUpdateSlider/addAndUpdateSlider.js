import React from "react";
import MenuWrapper from "../../components/MenuWrapper";
import Input from "../../components/Input";
import TextEditor from "../../components/TextEditor";
import ImageFile from "../../components/Files";
import Button from "../../components/Button";
import useSlider from "../../talons/useSlider";
import classes from "./addAndUpdateSlider.module.css";

const AddSlider = () => {
  const {
    id,
    sliderContent,
    handleSliderName,
    handleEditorValue,
    handleAddForm,
    handleRemoveForm,
    handleImage,
    handleRemoveImg,
    addSlider,
  } = useSlider();

  return (
    <MenuWrapper>
      <div className={classes.section}>
        <h1 className={classes.heading}>
          {id ? "Փոխել սլայդերի տվյալները" : "Ավելացնել սլայդեր"}
        </h1>
        <div className={classes.content}>
          <div className={classes.contentHeading}>
            <Input
              style={{ width: "50%" }}
              value={sliderContent.sliderName}
              onChange={handleSliderName}
              placeholder="Add name"
            />
            {sliderContent.sliderNameError && (
              <div className={classes.getErrorMessage}>
                *Field is empty
              </div>
            )}
            <span
              className={classes.addSlider}
              onClick={handleAddForm}
            ></span>
          </div>
          {sliderContent.content.map((value, i) => {
            return (
              <div className={classes.addFields} key={i}>
                <span
                  className={classes.removeSlide}
                  onClick={() => handleRemoveForm(i)}
                ></span>
                <TextEditor
                  content={value.editorValue}
                  onChange={(e) => handleEditorValue(i, e)}
                >
                  {value.editorError && (
                    <div className={classes.getErrorMessage}>
                      *Field is empty
                    </div>
                  )}
                </TextEditor>
                <ImageFile
                  classes={{ root: classes.addAndUpdateSlider }}
                  onChange={(e) => handleImage(i, e)}
                  placeholder="Add image"
                >
                  {value.imageError && (
                    <div className={classes.getErrorMessage}>
                      *Field is empty
                    </div>
                  )}
                </ImageFile>
                {value.sliderImage && (
                  <div className={classes.imageDiv}>
                    <span
                      className={classes.removeImg}
                      onClick={() => handleRemoveImg(i)}
                    ></span>
                    <img src={value.sliderImage} alt="" />
                  </div>
                )}
              </div>
            );
          })}
          <Button
            style={{ marginTop: "40px" }}
            disabled={sliderContent.length === 0}
            onClick={addSlider}
          >
            Ավելացնել
          </Button>
        </div>
      </div>
    </MenuWrapper>
  );
};

export default AddSlider;

// jodit-react
