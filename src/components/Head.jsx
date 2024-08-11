import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  console.log(searchCache);

  /**
   * searchCache looks like this:-
   * {
   *    iphone: ["iphone11", "iphone12", "iphone13", "iphone14];      // here iphone is searchQuery key value q={key}:-
   *    searchQuery: iphone
   * }
   */

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => {

      // memoization technique:-
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }



    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // when the diffference between two key strokes is greater than ≥ 200 ms make an api call.
    // when the diffference between two key strokes is greater than < 200 ms decline the api call.
  }, [searchQuery]);

  // Define the async function to get search suggestions
  async function getSearchSuggestions() {
    console.log("API CALL -:" + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    console.log(result);

    setSuggestions(result[1]);

    // update data in cache so that we will use this by memoization technique.
    dispatch(cacheResults({
      [searchQuery]: result[1],
    }));
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

        <div className="w-[50vw] flex flex-col justify-center items-center ">
          <div className="flex relative w-full ">
            <input
              className="w-[95%] rounded-l-full px-[12px] py-[8px] border border-gray-400"
              type="text"
              name=""
              id=""
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);

              }}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setShowSuggestions(false);
              }}
            />

            <button className=" h-[42px] p-3 w-[4vw] flex justify-center items-center bg-zinc-300 rounded-r-full border border-gray-400">
              <CiSearch></CiSearch>
            </button>
          </div>

          {showSuggestions && (
            <div className="flex items-center absolute top-[12px] right-[409px] w-[40.5rem] bg-white mt-12 shadow-lg rounded-lg px-8 py-2 border border-gray-200 ">
              <ul className="w-full">
                {suggestions &&
                  suggestions.map((item, index) => {
                    return (
                      <>
                        <div
                          key={item}
                          className="flex  items-center gap-2 hover:bg-gray-100 py-2 shadow-sm "
                        >
                          <CiSearch></CiSearch>
                          <li className=" ">{item}</li>
                        </div>
                      </>
                    );
                  })}
              </ul>
            </div>
          )}
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
