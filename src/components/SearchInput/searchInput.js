import React from "react";
import Input from "../Input";
import classes from "./searchInput.module.css";

const SearchInput = (props) => {
  return (
    <Input
      classes={{ root: classes.searchInput }}
      value={props.value || ""}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default SearchInput;
