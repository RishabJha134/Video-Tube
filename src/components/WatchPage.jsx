import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // (searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 flex flex-col w-full">
      <div className="flex ">

      <iframe
        width="3500"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="w-full">
        <LiveChat></LiveChat>
      </div>
      </div>
      
      <CommentsContainer></CommentsContainer>
    </div>
  );
};

export default WatchPage;
