import React, { useMemo } from "react";
import defaultClasses from "./list.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import Node from "./Node";

const List = (props) => {
  const { data = {}, onNodeClick, displayNodeLength } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const renderDataArr = useMemo(() => {
    return [data].map((node, ind) => {
      return (
        <Node
          key={node.id || ind}
          item={node}
          onClick={onNodeClick}
          displayNodeLength={displayNodeLength}
        />
      );
    });
  }, [data, onNodeClick, displayNodeLength]);

  return (
    <div className={classes.root}>
      <ul className={classes.list}>{renderDataArr}</ul>
    </div>
  );
};

export default List;
