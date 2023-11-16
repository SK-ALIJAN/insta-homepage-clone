import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <WRAPPER>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
          alt=""
        />
        <Link to={"/authentication"}>
          <button>Log In / Sign Up</button>
        </Link>
      </WRAPPER>

      <DIV>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
          alt=""
        />

        <div>
          <div className="first">
            <div className="tickRow">
              <p>instagram</p> <p className="Tick">&#10003;</p>
            </div>
            <div className="firstLine">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>

          <div className="secondLine">
            <p>7,407 posts</p>
            <p>662M followers</p>
            <p>98 following</p>
          </div>
        </div>
      </DIV>
    </>
  );
};

export default Navbar;

let WRAPPER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid grey;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
  img {
    width: 3rem;
    padding: 10px;
  }
  button {
    border: 0;
    background-color: #1877f2;
    padding: 0.5rem;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

let DIV = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding: 1rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  .firstLine,
  .secondLine {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;

    button {
      padding: 6px 20px;
      border: 0;
      border-radius: 7px;
      cursor: pointer;
      font-weight: 600;
      margin-right: 10px;
    }
  }

  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Tick {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 100%;
      display: grid;
      place-content: center;
      color: white;
      background-color: #1877f2;
      margin-left: 10px;
    }

    .tickRow {
      display: flex;
      margin-right: 1rem;
    }
  }
  .secondLine {
    font-weight: 600;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
`;
