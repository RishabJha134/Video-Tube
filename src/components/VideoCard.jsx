import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  if (!info) return null; // Return null if no info is provided

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const isSidebarShow = useSelector((store) => store.app.isMenuOpen);
  // console.log(isSidebarShow);

  return (
    <div
      className={`p-2 m-2 ${isSidebarShow ? "w-[20vw]" : "w-[18vw]"} shadow-lg`}
    >
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
