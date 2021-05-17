import React, { useState, useMemo, useCallback } from "react";
import defaultClasses from "./node.module.css";
import mergeClasses from "../../../helpers/mergeClasses";

const Node = (props) => {
  const [open, setOpen] = useState(false);
  const {
    item,
    onClick = () => {},
    onIconClick = () => {},
    displayNodeLength = true,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const childNode = useMemo(() => {
    if (item.children && item.children.length) {
      return item.children.map((node, ind) => {
        return (
          <Node
            key={node.id || ind}
            item={node}
            onClick={onClick}
            onIconClick={onIconClick}
            displayNodeLength={displayNodeLength}
          />
        );
      });
    }
  }, [item, onClick, onIconClick, displayNodeLength]);

  const handleOnClick = useCallback(() => {
    onClick(item);
  }, [onClick]);

  const handleOnIconClick = useCallback(() => {
    setOpen((prevState) => !prevState);

    onIconClick(item);
  }, [onIconClick]);

  return (
    <li className={classes.root}>
      <span className={classes.iconPlus} onClick={handleOnIconClick} />
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
