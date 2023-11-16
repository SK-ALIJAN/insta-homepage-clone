import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { SignINReducer, SignupReducer } from "./Reducer/authReducer";
import postReducer from "./Reducer/postReducer";
import saveReducer from "./Reducer/saveReducer";

let rootReducer = combineReducers({
  SignINReducer,
  SignupReducer,
  postReducer,
  saveReducer,
});

// custome middleware in the place of thunk
let myMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    action(store, dispatch);
  } else {
    dispatch(action);
  }
};

const store = createStore(rootReducer, applyMiddleware(myMiddleware));

export default store;
