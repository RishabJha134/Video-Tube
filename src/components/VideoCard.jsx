import React from "react";
import { useSelector } from "react-redux";

const formatViewCount = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`; // Format to millions
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`; // Format to thousands
  }
  return count; // Return the original number if less than 1000
};

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const isSidebarShow = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-2 m-2 ${
        isSidebarShow ? "sm:w-[20vw] lg:w-[20vw]" : "sm:w-[88vw] lg:w-[18vw]"
      } cursor-pointer bg-black text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 
      sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[20vw]`}
    >
      <img
        className="rounded-lg w-full h-auto object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="mt-2">
        <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-400">{channelTitle}</p>
        <p className="text-sm text-gray-400">{formatViewCount(statistics.viewCount)} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
