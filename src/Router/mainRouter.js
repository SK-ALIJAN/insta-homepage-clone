import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../authentication/Authentication";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element />
      <Route path="/authentication" element={<Authentication />} />
    </Routes>
  );
};

export default MainRouter;
