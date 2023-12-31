import { AddComment, LoginSuccess } from "./actionType";

export function AddComments(id, obj) {
  return (state, dispatch) => {
    let { postReducer } = state.getState();
    let newData = postReducer.map((ele, i) => {
      if (i === id) {
        ele.comments.push(obj);
        return ele;
      } else {
        return ele;
      }
    });

    dispatch({ type: AddComment, payload: newData });
  };
}

export function authtication(obj) {
  return (state, dispatch) => {
    dispatch({ type: LoginSuccess, payload: obj });
  };
}
