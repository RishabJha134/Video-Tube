import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center bg-[#282828] p-2 rounded-lg shadow-sm text-white">
      <FaUserCircle className="text-gray-400 h-8 w-8" />
      <span className="font-bold px-2 text-gray-200">{name}</span>
      <span className="text-gray-300">{message}</span>
    </div>
  );
};

export default ChatMessage;
