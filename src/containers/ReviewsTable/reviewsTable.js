import React from "react";
import useReviewsTable from "../../talons/useReviewsTable";
import MenuWrapper from "../../components/MenuWrapper";
import ContentTable from "../../components/ContentTable";
import classes from "./reviewsTable.module.css";

const ReviewsTable = () => {
  const { data, columns } = useReviewsTable({
    edit: classes.edit,
    remove: classes.remove,
  });
  return (
    <MenuWrapper activeClass={2}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ *</h2>
        <ContentTable
          page="Կարծիքների"
          columns={columns}
          data={data}
          add="/add-review"
        />
      </div>
    </MenuWrapper>
  );
};

export default ReviewsTable;
