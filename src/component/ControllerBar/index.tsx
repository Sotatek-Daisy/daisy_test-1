import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBoxAction, addElemnentToBox } from "../../redux/reducers";
import { RootState } from "../../types/redux";

const ControllerBar = () => {
  const dispatch = useDispatch();

  const [textBox, setTextBox] = useState("");
  const boxes = useSelector((state: RootState) => state.boxes);
  const { dataBox } = boxes;

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextBox(e.target.value);
  };
  const handleChangeAction = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (e.target.value) {
      case "add":
        dispatch(addBoxAction(textBox));
        break;
      default:
        dispatch(
          addElemnentToBox({
            boxValue: e.target.value,
            elementValue: { value: textBox, createdTime: Date.now() },
          })
        );
    }
    setTextBox("");
  };
  return (
    <div>
      <input type="text" value={textBox} onChange={handleChangeText} />
      <select value="" onChange={handleChangeAction}>
        <option disabled={true} value="">
          Choose an action
        </option>
        {dataBox.map((box) => (
          <option key={box.value} value={box.value}>
            {box.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ControllerBar;
