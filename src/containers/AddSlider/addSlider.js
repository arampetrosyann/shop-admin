import React from "react";
import MenuWrapper from "../../components/MenuWrapper";
import Select from "../../components/Select";
import Input from "../../components/Input";
import ImageFile from "../../components/Files";
import Button from "../../components/Button";
import useAddSlider from "../../talons/useAddSlider";
import classes from "./addSlider.module.css";

const AddSlider = () => {
  const {
    options,
    label,
    addForms,
    inputValue,
    handleInputValue,
    handleSelect,
    handleAddForm,
  } = useAddSlider();

  return (
    <MenuWrapper>
      <div className={classes.section}>
        <h1 className={classes.heading}>Ավելացնել սլայդեր</h1>
        <div className={classes.content}>
          <div className={classes.contentHeading}>
            <Select
              id="slider"
              options={options}
              label="slider"
              onChange={handleSelect}
            />
            <span
              className={
                label ? classes.addSlider : classes.disabledAddButton
              }
              onClick={handleAddForm}
            ></span>
          </div>
          {addForms.length !== 0 &&
            addForms.map((form) => {
              return (
                <div className={classes.addFields} key={form}>
                  <span className={classes.removeSlide}></span>
                  <Input
                    style={{ marginBottom: "20px", width: "100%" }}
                    value={inputValue}
                    onChange={handleInputValue}
                    placeholder="Add content"
                  />
                  <ImageFile placeholder="Add image" />
                </div>
              );
            })}
          {addForms.length === 0 ? (
            <Button style={{ marginTop: "40px" }} disabled>
              Ավելացնել
            </Button>
          ) : (
            <Button style={{ marginTop: "40px" }}>Ավելացնել</Button>
          )}
        </div>
      </div>
    </MenuWrapper>
  );
};

export default AddSlider;
