import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import Login from "./Login";
import styled from "styled-components";
import auth from "../../assets/auth.jpg";

const Authentication = () => {
  const [moveto, setMoveTo] = useState("signup");

  function changeMoveTo(changeto) {
    setMoveTo(changeto);
  }

  return (
    <DIV>
      <img src={auth} alt="" />
      {moveto === "signup" ? (
        <Signup changeMoveTo={changeMoveTo} />
      ) : (
        <Login changeMoveTo={changeMoveTo} />
      )}
    </DIV>
  );
};

export default Authentication;

let DIV = styled.div`
  img {
    position: absolute;
    width: 100vw;
    height: 100%;
  }
`;