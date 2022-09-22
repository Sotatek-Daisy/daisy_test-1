import { useDispatch } from "react-redux";
import {
  deleteBoxAction,
  deleteElementAction,
  moveElementAction,
} from "../../redux/reducers";
import { IBoxProps, IElementProps } from "../../types/box";
import "./index.scss";

const SingleBox = (props: IBoxProps) => {
  const dispatch = useDispatch();
  const { value, elementBox, moveDataBox } = props;
  const handleDeleteBox = () => {
    dispatch(deleteBoxAction(value));
  };

  const handleChangeMove = (
    e: React.ChangeEvent<HTMLSelectElement>,
    element: IElementProps
  ): void => {
    switch (e.target.value) {
      case "delete":
        dispatch(
          deleteElementAction({ boxValue: value, elementValue: element })
        );
        break;
      default:
        dispatch(
          deleteElementAction({ boxValue: value, elementValue: element })
        );
        dispatch(
          moveElementAction({ boxMove: e.target.value, elementValue: element })
        );
    }
  };

  return (
    <div className="single-box">
      <div className="single-box_bar">
        <p className="single-box_bar--label">{value}</p>
        <button onClick={handleDeleteBox}>Delete</button>
      </div>
      <div className="single-box_element">
        {elementBox.map((item, i) => (
          <div className="single-box_bar element" key={i}>
            <p className="single-box_bar--label">{item.value}</p>
            <select value="" onChange={(e) => handleChangeMove(e, item)}>
              <option disabled={true} value="">
                Choose an action
              </option>
              <option key="delete" value="delete">
                Delete
              </option>
              {moveDataBox.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBox;
