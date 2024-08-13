import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
