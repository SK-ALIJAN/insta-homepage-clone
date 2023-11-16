import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 Not Found</NotFoundTitle>
      <NotFoundText>
        Oops! The page you are looking for might be in another galaxy.
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  color: #fff;
  font-family: "Arial", sans-serif;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
`;
