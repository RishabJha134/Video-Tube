import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <>
      <div className="flex gap-[20vw] px-2 m-2 shadow-lg ">
        <div className="flex justify-center items-center">
          <IoMenu
            onClick={() => {
              toggleMenuHandler();
            }}
            className="h-[1.5em] cursor-pointer"
            style={{ width: "50px" }}
          ></IoMenu>

          {/* <Link to="/"> */}
            <img
              className="h-14"
              src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
              alt="youtube-logo"
            />
          {/* </Link> */}

        </div>

        <div className="w-[50vw] flex justify-center items-center ">
          <input
            className="w-[95%] rounded-l-full px-[12px] py-[8px] border border-gray-400"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <button className=" h-[42px] p-3 w-[4vw] flex justify-center items-center bg-zinc-300 rounded-r-full border border-gray-400">
            <CiSearch></CiSearch>
          </button>
        </div>

        <div className=" flex justify-center items-center">
          <FaUserCircle
            className="h-[3vh]"
            style={{ width: "30px" }}
          ></FaUserCircle>
        </div>
      </div>
    </>
  );
};

export default Head;
