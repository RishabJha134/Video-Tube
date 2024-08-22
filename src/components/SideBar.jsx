import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPlay,
  FaHistory,
  FaMusic,
  FaFilm,
  FaGamepad,
} from "react-icons/fa";

const SideBar = () => {
  // Subscribe to redux store:-
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // If the menu is not open, return null
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="py-5 px-4 h-[100vh] sticky top-14 left-0 shadow-lg w-64 bg-black text-gray-50">
      <ul className="space-y-2">
        <li className="flex items-center p-2 hover:text-black hover:bg-white  rounded-lg   transition-colors duration-200 cursor-pointer">
          <FaHome className="mr-3 text-xl  " />
          <Link to="/" className="flex-1  text-lg font-medium ">
            Home
          </Link>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaPlay className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Shorts</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaHistory className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Subscriptions</span>
        </li>
      </ul>

      <div className="w-full h-px bg-gray-700 my-4"></div>

      <h1 className="font-bold text-lg pb-2 text-gray-300">Explore</h1>
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaMusic className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Music</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaFilm className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Movies</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaGamepad className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Gaming</span>
        </li>
      </ul>

      <div className="w-full h-px bg-gray-700 my-4"></div>

      <h1 className="font-bold text-lg pb-2 text-gray-300">Watch Later</h1>
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaMusic className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Music</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaFilm className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Movies</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:text-black hover:bg-white transition-colors duration-200 cursor-pointer">
          <FaGamepad className="mr-3 text-xl " />
          <span className="text-lg font-medium ">Gaming</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
