import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const TotalLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default TotalLayout;
