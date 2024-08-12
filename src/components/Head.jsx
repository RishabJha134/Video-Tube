import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchCache = useSelector((store) => store.search);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSearchSuggestions() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    setSuggestions(result[1]);

    dispatch(
      cacheResults({
        [searchQuery]: result[1],
      })
    );
  }

  // Handle suggestion click
  // const handleSuggestionClick = (suggestionItem) => {
  //   alert("okay");
  //   console.log(suggestionItem);
  //   setSearchQuery(suggestionItem);
  //   setShowSuggestions(false);
  //   performSearch(suggestionItem);
  // };

  // Perform the search
  const performSearch = async (suggestionItem) => {
    console.log(suggestionItem);
    const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${suggestionItem}&key=${GOOGLE_API_KEY}`;

    const response = await fetch(YOUTUBE_SEARCH_URL);
    const data = await response.json();

    setSearchResults(data.items);
    console.log("Search Results:", data.items);
  };

  return (
    <>
      <div className="flex gap-[20vw] px-2 m-2 shadow-lg ">
        <div className="flex justify-center items-center">
          <IoMenu
            onClick={toggleMenuHandler}
            className="h-[1.5em] cursor-pointer"
            style={{ width: "50px" }}
          />
          <div className="flex justify-center items-center w-full bg-zinc-100 gap-1">
            <img
              className="h-8"
              src="https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M"
              alt="youtube-logo"
            />
            <h1 className="w-[5vw] text-xl">VTube</h1>
          </div>
        </div>

        <div className="w-[50vw] flex flex-col justify-center items-center">
          <div className="flex relative w-full">
            <input
              className="w-[95%] rounded-l-full px-[12px] py-[8px] border border-gray-400"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            {/* {searchResults.map((item, index) => {
              return (
                <> */}
            {/* <Link key={index} to={`/result?v=${item.id}`}> */}

            <button
              className="h-[42px]  p-3 w-[4vw] flex justify-center items-center bg-zinc-300 rounded-r-full border border-gray-400"
              onClick={() => performSearch(searchQuery)}
            >
              <CiSearch />
            </button>
            {/* </Link> */}
            {/* </>
              );
            })} */}
          </div>

          {showSuggestions && (
            <div className="flex items-center absolute top-[12px] right-[409px] w-[40.5rem] bg-white mt-12 shadow-lg rounded-lg px-8 py-2 border border-gray-200 ">
              <ul className="w-full">
                {suggestions &&
                  suggestions.map((item, index) => {
                    // console.log(item);
                    return (
                      <div
                        key={index}
                        className="flex bg-zinc-500 items-center gap-2 hover:bg-gray-100 py-2 shadow-sm cursor-pointer"
                      >
                        <CiSearch />

                        <Link to={`/result?search_query=${searchQuery}`}>
                          <button
                            className="text-4xl"
                            onClick={() => {
                              console.log("yes");
                            }}
                          >
                            {item}
                          </button>
                        </Link>
                      </div>
                    );
                  })}
              </ul>
            </div>
          )}

          {/* {searchResults.length > 0 && (
            <div className="mt-4 w-full">
              <h2 className="text-lg font-semibold">Search Results:</h2>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="flex items-start py-2">
                    <img
                      className="w-20 h-20 mr-4"
                      src={result.snippet.thumbnails.default.url}
                      alt={result.snippet.title}
                    />
                    <div>
                      <h3 className="font-bold">{result.snippet.title}</h3>
                      <p className="text-sm text-gray-600">
                        {result.snippet.channelTitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>

        <div className="flex justify-center items-center">
          <FaUserCircle className="h-[3vh]" style={{ width: "30px" }} />
        </div>
      </div>
    </>
  );
};

export default Head;
