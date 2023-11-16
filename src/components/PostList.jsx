import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import styled from "styled-components";

const PostList = () => {
  let data = useSelector((store) => store.postReducer);

  return (
    <WRAPPER>
      {data.map((ele, i) => {
        return <Post key={i} {...ele} index={i}/>;
      })}
    </WRAPPER>
  );
};

export default PostList;

let WRAPPER = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
