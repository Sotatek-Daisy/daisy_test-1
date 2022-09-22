import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/redux";
import SingleBox from "./SingleBox";
import "./index.scss";

const TableBoxes = () => {
  const boxes = useSelector((state: RootState) => state.boxes);
  const { dataBox } = boxes;

  return (
    <div className="boxes">
      {dataBox.map(
        (box) =>
          box.value !== "add" && (
            <SingleBox
              key={box.value}
              value={box.value}
              elementBox={box.elementBox}
              moveDataBox={box.moveDataBox}
            />
          )
      )}
    </div>
  );
};

export default TableBoxes;
