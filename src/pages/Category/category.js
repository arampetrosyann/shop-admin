import React from "react";
import { Link } from "react-router-dom";
import Tree from "react-d3-tree";
import defaultClasses from "./category.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useCategory from "../../talons/useCategory";
import MenuWrapper from "../../components/MenuWrapper";

const Category = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { data, onNodeClick } = useCategory();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1>Կատեգորիաներ</h1>

          <Link
            to="/add-category"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className={classes.button}>
              <span className={classes.add} />
            </button>
          </Link>
        </div>

        <div className={classes.container}>
          <Tree
            data={data}
            orientation="vertical"
            pathFunc="diagonal"
            collapsible={false}
            separation={{ siblings: 2, nonSiblings: 2 }}
            nodeSize={{ x: 100, y: 100 }}
            translate={{ x: 450, y: 20 }}
            rootNodeClassName={classes.rootNode}
            branchNodeClassName={classes.nodeWithChildren}
            leafNodeClassName={classes.nodeWithoutChildren}
            onNodeClick={onNodeClick}
          />
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Category;
