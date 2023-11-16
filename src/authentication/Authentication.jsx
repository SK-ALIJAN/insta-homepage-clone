import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import styled from "styled-components";

const Authentication = () => {
  const [moveto, setMoveTo] = useState("signup");

  function changeMoveTo(changeto) {
    setMoveTo(changeto);
  }

  return (
    <DIV>
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
  background-image: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d,
    #f56040,
    #f77737,
    #fcaf45,
    #ffdc80
  );
  height: 100vh;
  width: 100%;
`;
