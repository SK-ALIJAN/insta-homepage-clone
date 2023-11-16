import React from "react";
import styled from "styled-components";
import PostList from "./PostList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <WRAPPER>
        <PostList />
      </WRAPPER>
    </>
  );
};

export default Home;

let WRAPPER = styled.div`
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
`;
