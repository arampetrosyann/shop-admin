import React from "react";
import { useSelector } from "react-redux";
import useSlidersTable from "../../talons/useSlidersTable";
import MenuWrapper from "../../components/MenuWrapper";
import AddLink from "../../components/AddLink";
import ButtonMassRemove from "../../components/ButtonMassRemove";
import SearchInput from "../../components/Input";
import ContentTable from "../../components/ContentTable";
import classes from "./slidersTable.module.css";

const SlidersTable = () => {
  const { firstName } = useSelector((state) => state.admin);
  const state = useSlidersTable({
    tableImage: classes.tableImage,
    edit: classes.edit,
    remove: classes.remove,
  });

  return (
    <MenuWrapper activeClass={3}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ {firstName}</h2>
        <div className={classes.quickActionsLinks}>
          <AddLink add="/add-slider" />
        </div>
        <div className={classes.quickActionsButtons}>
          <ButtonMassRemove
            handleMassRemoveButton={state.handleSlidersMassRemoveButton}
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
          page="Սլայդերի"
          columns={state.columns}
          data={state.data}
          handleMassIds={state.handleSlidersMassIds}
        />
      </div>
    </MenuWrapper>
  );
};

export default SlidersTable;
