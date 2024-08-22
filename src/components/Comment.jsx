import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text } = data;  // Destructure data to get name and text

  return (
    <div className="flex items-start bg-gray-800 p-3 rounded-lg my-2 shadow-md">
      <FaUserCircle className="text-gray-400 text-3xl" />
      <div className="px-3">
        <p className="font-bold text-white">{name}</p>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
