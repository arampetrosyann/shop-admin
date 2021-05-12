import React, { useState, useMemo, useCallback } from "react";
import defaultClasses from "./node.module.css";
import mergeClasses from "../../../helpers/mergeClasses";

const Node = (props) => {
  const [open, setOpen] = useState(false);
  const { item, onClick = () => {}, displayNodeLength = true } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const childNode = useMemo(() => {
    if (item.children) {
      return item.children.map((node, ind) => {
        return (
          <Node
            key={node.id || ind}
            item={node}
            onClick={onClick}
            displayNodeLength={displayNodeLength}
          />
        );
      });
    }
  }, [item, onClick, displayNodeLength]);

  const handleOnClick = useCallback(() => {
    setOpen((prevState) => !prevState);

    onClick(item);
  }, [onClick]);

  return (
    <li className={classes.root}>
      <span className={classes.name} onClick={handleOnClick}>
        {item.name}
        {displayNodeLength
          ? childNode
            ? ` (${childNode.length})`
            : null
          : null}
      </span>
      {childNode ? (
        open ? (
          <ul className={classes.list}>{childNode}</ul>
        ) : null
      ) : null}
    </li>
  );
};

export default Node;
