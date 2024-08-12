import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome, FaPlay, FaHistory, FaMusic, FaFilm, FaGamepad } from "react-icons/fa";

const SideBar = () => {
  // subscribe to redux store:-
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //  (isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="py-5 px-4 shadow-lg w-64 bg-zinc-200 text-black">
      <ul className="space-y-1">
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaHome className="mr-3" />
          <Link to="/" className="flex-1">
            Home
          </Link>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaPlay className="mr-3" />
          Shorts
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaHistory className="mr-3" />
          Subscriptions
        </li>
      </ul>
<div className="w-[11vw] bg-black border border-zinc-500 mt-2">

</div>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="space-y-1">
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaMusic className="mr-3" />
          Music
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaFilm className="mr-3" />
          Movies
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaGamepad className="mr-3" />
          Gaming
        </li>
      </ul>

      <div className="w-[11vw] bg-black border border-zinc-500 mt-2"></div>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="space-y-1">
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaMusic className="mr-3" />
          Music
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaFilm className="mr-3" />
          Movies
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-zinc-400 transition cursor-pointer">
          <FaGamepad className="mr-3" />
          Gaming
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
