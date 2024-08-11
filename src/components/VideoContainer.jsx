import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  async function getPopularVideo() {
    const result = await axios.get(YOUTUBE_VIDEOS_API);
    // console.log(result.data.items);
    setVideos(result.data.items);
  }
  useEffect(() => {
    getPopularVideo();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard  info={item}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
