import React from "react";
import Files from "react-files";
import defaultClasses from "./files.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const ReactFiles = (props) => {
  const {
    onChange,
    onError,
    accepts = ["image/*"],
    multiple = false,
    clickable,
    minFileSize,
    maxFileSize,
    maxFiles,
    placeholder,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <Files
        accepts={accepts}
        maxFiles={maxFiles}
        minFileSize={minFileSize}
        maxFileSize={maxFileSize}
        multiple={multiple}
        clickable={clickable}
        onChange={onChange}
        onError={onError}
      >
        {placeholder}
      </Files>
    </div>
  );
};

export default ReactFiles;
