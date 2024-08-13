import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log('Search API URL:', YOUTUBE_SEARCH_API);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    setSuggestions(result[1]);

    dispatch(
      cacheResults({
        [searchQuery]: result[1],
      })
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Update input field with clicked suggestion
    setShowSuggestions(false); // Hide suggestions dropdown
    // alert("hello")
    navigate(`/search/${encodeURIComponent(suggestion)}`); // Trigger search
  };

  const handleSearch = (e) => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-zinc-400 shadow-lg">
      <div className="flex items-center">
        <IoMenu
          onClick={toggleMenuHandler}
          className="h-8 w-[22px]  text-white cursor-pointer"
        />
        <Link to={"/"}>
        <div className="ml-4">
          <img
            className="h-9"
            src="https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M"
            alt="V-logo"
          />
        </div>
        </Link>
        
      </div>

      <div className="relative  flex items-center w-[600px] ">
        <form onSubmit={handleSearch} className="flex w-full ">
          <input
            type="text"
            className="w-full text-white h-10 px-4 py-2  bg-[#181818] rounded-l-full focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => {
            //   setTimeout(() => {
            //    const intervalId = setShowSuggestions(false);

            //     return ()=>{
            //       clearInterval(intervalId);
            //     }
            //   }, 200);
            // }}
          />
          <button
            type="submit"
            className="flex items-center justify-center w-16 h-10 bg-[#323232] rounded-r-full"
          >
            <CiSearch size={20} className="text-white" />
          </button>
        </form>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-[35px] left-0 w-full mt-2 bg-[#212121] rounded-xl shadow-lg z-50">
            <ul className="p-2 text-white">
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#383838] rounded-lg"
                  onClick={() => handleSuggestionClick(item)}
                >
                  <CiSearch size={20} className="mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <FaUserCircle className="h-6 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
