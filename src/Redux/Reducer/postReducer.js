import { post } from "../../utilities/staticPost";
import { AddComment } from "../actionType";

const postReducer = (state = post, { type, payload }) => {
  switch (type) {
    case AddComment:
      return [...state, payload];

    default:
      return state;
  }
};

export default postReducer;
