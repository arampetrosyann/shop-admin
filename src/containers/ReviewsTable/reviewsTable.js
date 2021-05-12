import React from "react";
import { useSelector } from "react-redux";
import useReviewsTable from "../../talons/useReviewsTable";
import MenuWrapper from "../../components/MenuWrapper";
import AddLink from "../../components/AddLink";
import ButtonMassRemove from "../../components/ButtonMassRemove";
import SearchInput from "../../components/Input";
import ContentTable from "../../components/ContentTable";
import classes from "./reviewsTable.module.css";

const ReviewsTable = () => {
  const { firstName } = useSelector((state) => state.admin);
  const state = useReviewsTable({
    edit: classes.edit,
    remove: classes.remove,
  });

  return (
    <MenuWrapper activeClass={2}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ {firstName}</h2>
        <div className={classes.quickActionsLinks}>
          <AddLink add="/add-review" />
        </div>
        <div className={classes.quickActionsButtons}>
          <ButtonMassRemove
            handleMassRemoveButton={state.handleCustomersMassRemoveButton}
            idsArray={state.idsArrayState}
          />
          <SearchInput
            type="text"
            value={state.searchInputValue}
            onChange={state.handleSearchInput}
            placeholder="Փնտրել..."
          />
        </div>
        <ContentTable
          page="Կարծիքների"
          columns={state.columns}
          data={state.data}
          handleMassIds={state.handleCustomersMassIds}
        />
      </div>
    </MenuWrapper>
  );
};

export default ReviewsTable;
