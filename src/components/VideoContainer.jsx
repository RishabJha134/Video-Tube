import React, { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // List of videos
  const [nextPageToken, setNextPageToken] = useState(""); // Token for next set of videos
  const [isShowLoading, setIsShowLoading] = useState(true);

  // Function to fetch videos
  const fetchVideos = async (pageToken = "") => {
    try {
      const response = await axios.get(YOUTUBE_VIDEOS_API, {
        params: {
          pageToken,
          // maxResults: 50,
        },
      });

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setIsShowLoading(false);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  // Infinite scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      console.log("window ka height only" + window.innerHeight);
      console.log(
        "scroll ke scrolling ka height only" +
          document.documentElement.scrollTop
      );
      console.log("full window height" + document.documentElement.scrollHeight);
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsShowLoading(true); // Show loading spinner
        // jab tak hum next page ko api call nahi kr rhe tab tak user ko loading effect dikhega.
        fetchVideos(nextPageToken);
        console.log(
          "touch hote hi api call karna hai sir for infinite scrolling"
        );
      }
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  return (
    <div className="flex flex-wrap">
      {videos.map((item, index) => (
        <Link key={index} to={`/watch?v=${item.id}`}>
          <VideoCard info={item}></VideoCard>
        </Link>
      ))}
      {isShowLoading && (
        <h1 className="text-2xl text-red-500 font-bold flex justify-center items-center">
          Loading...
        </h1>
      )}
    </div>
  );
};

export default VideoContainer;
