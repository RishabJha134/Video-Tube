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
    const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(YOUTUBE_SEARCH_API + searchQuery)}`);
    const result = await data.json();
    const suggestions = JSON.parse(result.contents);
    setSuggestions(suggestions[1]);
  
    dispatch(
      cacheResults({
        [searchQuery]: suggestions[1],
      })
    );
  };
  
  
  
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/search/${encodeURIComponent(suggestion)}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="flex sticky top-0 left-0 items-center justify-between px-4 py-2 bg-black shadow-md z-50">
      <div className="flex items-center">
        <IoMenu
          onClick={toggleMenuHandler}
          className="h-8 w-8 text-white cursor-pointer"
        />
        <Link to={"/"}>
        <div className="ml-4 flex items-center gap-2">
  <img
    className="h-9"
    src="https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M"
    alt="V-logo"
  />
  <h1 className="text-white text-xl font-bold flex items-center">
    <span className="text-[#40CBCB]">V</span> Tube
  </h1>
</div>

        </Link>
      </div>

      <div className="relative flex items-center w-[40%] ">
        <form onSubmit={handleSearch} className="flex w-full">
          <input
            type="text"
            className="w-full text-white h-10 border-l border-t border-b border-gray-500 px-4 py-2 bg-[#121212] rounded-l-full focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            type="submit"
            className="flex items-center border border-gray-500 justify-center w-16 h-10 bg-[#303030] rounded-r-full"
          >
            <CiSearch size={20} className="text-white" />
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-[40px] left-0 w-full mt-2 bg-[#282828] rounded-xl shadow-lg z-50">
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
        <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
