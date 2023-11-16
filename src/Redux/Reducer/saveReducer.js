import { SaveReels } from "../actionType";

let initialData = [];

const saveReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case SaveReels:
      return [...state, payload];

    default:
      return state;
  }
};

export default saveReducer;
