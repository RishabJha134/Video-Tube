import React, { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // List of videos
  const [nextPageToken, setNextPageToken] = useState(""); // Token for next set of videos

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
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        fetchVideos(nextPageToken);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  return (
    <div className="flex flex-wrap overflow-y-scroll">
      {videos.map((item) => (
        <Link key={item.id} to={`/watch?v=${item.id}`}>
          <VideoCard info={item}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

