import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../authentication/Authentication";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
