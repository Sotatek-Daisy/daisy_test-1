import { createSlice } from "@reduxjs/toolkit";
import { IBoxProps, IMoveBoxProps } from "../types/box";

interface InitState {
  dataBox: IBoxProps[];
}

const initialState: InitState = {
  dataBox: [
    {
      label: "Add Box",
      value: "add",
      elementBox: [],
      moveDataBox: [],
    },
  ],
};

const addBoxSlice = createSlice({
  name: "addBox",
  initialState: initialState,
  reducers: {
    addBoxAction: (state, actions) => {
      const renderNewMoveBox = state.dataBox.map((box: IBoxProps) => {
        const propMove = {
          label: `Move: ${actions.payload}`,
          value: actions.payload,
        };
        box.moveDataBox = [...box.moveDataBox, propMove];
        return box;
      });

      const propBox = {
        label: `Box: ${actions.payload}`,
        value: actions.payload,
        elementBox: [],
        moveDataBox: renderNewMoveBox
          .filter((box) => box.value !== "add")
          .map((box) => {
            const propMove = {
              label: `Move: ${box.value}`,
              value: box.value,
            };
            return propMove;
          }),
      };

      state.dataBox = actions.payload
        ? [...renderNewMoveBox, propBox]
        : state.dataBox;
    },
    addElemnentToBox: (state, actions) => {
      const { boxValue, elementValue } = actions.payload;
      state.dataBox = state.dataBox.map((box: IBoxProps) => {
        if (box.value === boxValue) {
          box.elementBox = [elementValue, ...box.elementBox];
          const arrMove = state.dataBox
            .filter((item) => item.value !== boxValue && item.value !== "add")
            .map((item: IMoveBoxProps) => {
              const propMove = {
                label: `Move: ${item.value}`,
                value: item.value,
              };
              return propMove;
            });

          box.moveDataBox = arrMove;
        }
        return box;
      });
    },
    deleteBoxAction: (state, actions) => {
      state.dataBox = state.dataBox
        .filter((box: IBoxProps) => box.value !== actions.payload)
        .map((box) => {
          box.moveDataBox = box.moveDataBox.filter(
            (item) => item.value !== actions.payload
          );
          return box;
        });
    },
    deleteElementAction: (state, actions) => {
      const { boxValue, elementValue } = actions.payload;
      state.dataBox = state.dataBox.map((box: IBoxProps) => {
        if (boxValue === box.value) {
          box.elementBox = box.elementBox.filter(
            (e) => e.value !== elementValue.value
          );
        }
        return box;
      });
    },
    moveElementAction: (state, actions) => {
      const { boxMove, elementValue } = actions.payload;
      state.dataBox = state.dataBox.map((box: IBoxProps) => {
        if (boxMove === box.value) {
          box.elementBox = [elementValue, ...box.elementBox].sort(
            (a, b) => b.createdTime - a.createdTime
          );
        }
        return box;
      });
    },
  },
});

export const {
  addBoxAction,
  addElemnentToBox,
  deleteBoxAction,
  deleteElementAction,
  moveElementAction,
} = addBoxSlice.actions;
export default addBoxSlice.reducer;
