import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { AddComments } from "./Redux/action";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddComments(3,{}));
  }, []);
  return <div className="App"></div>;
}

export default App;
