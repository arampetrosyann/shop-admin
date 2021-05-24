import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/best-gift.jpg";
import image2 from "../assets/images/book-author.jpg";

const useSlidersTable = (props) => {
  const [idsArrayState, setIdsArrayState] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSlidersMassIds = (reviewIds) => {
    if (idsArrayState.length !== reviewIds.length) {
      setIdsArrayState(reviewIds);
    }
  };

  const handleSlidersMassRemoveButton = async () => {
    await removeMassSliders({
      variables: {
        customerIds: idsArrayState,
      },
    });
    getSliders();
  };

  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value);
  };

  const data = useMemo(
    () => [
      {
        id: 0,
        slidersName: "Home",
        sliderName: "Lorem, ipsum dolor.",
        sliderImage: image1,
      },
      {
        id: 1,
        slidersName: "Home",
        sliderName: "Lorem, ipsum dolor.",
        sliderImage: image2,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
      },
      {
        Header: "Sliders Name",
        accessor: "slidersName",
      },
      {
        Header: "Name",
        accessor: "sliderName",
      },
      {
        Header: "Image",
        accessor: "sliderImage",
        Cell: (row) => (
          <div className={props.tableImage}>
            <img src={row.value} alt="" />
          </div>
        ),
      },

      {
        Header: "",
        accessor: "editAndRemove",
        Cell: (row) => (
          <div
            style={{
              color: row.row.values.column2 ? "blue" : "red",
              fontWeight: 600,
            }}
          >
            <Link
              to={`/slider/${row.row.original.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className={props.edit}></span>
            </Link>
            <span className={props.remove}></span>
          </div>
        ),
      },
    ],
    []
  );

  return {
    data,
    columns,
    idsArrayState,
    searchInputValue,
    handleSlidersMassIds,
    handleSlidersMassRemoveButton,
    handleSearchInput,
  };
};

export default useSlidersTable;
