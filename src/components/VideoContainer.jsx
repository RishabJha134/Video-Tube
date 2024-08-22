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
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsShowLoading(true); // Show loading spinner
        fetchVideos(nextPageToken);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  return (
    <div className="flex flex-wrap p-4 bg-black min-h-screen">
      {videos.map((item, index) => (
        <Link key={index} to={`/watch?v=${item.id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <VideoCard info={item} />
        </Link>
      ))}
      {isShowLoading && (
        <div className="w-full flex justify-center items-center py-4">
          <h1 className="text-2xl text-gray-400 font-bold">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
