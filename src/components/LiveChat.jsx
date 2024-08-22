import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(11),
        })
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-[#333] bg-[#212121] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((item, index) => {
          return (
            <div key={index}>
              <ChatMessage
                name={item.name}
                message={item.message}
              ></ChatMessage>
            </div>
          );
        })}
      </div>

      {/* Chat input section */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.trim()) {
            dispatch(
              addMessage({
                name: "Rishab Jha",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }
        }}
        className="w-full flex items-center p-2 ml-2 border border-[#333] rounded-lg bg-[#212121]"
      >
        <input
          className="flex-grow p-2 px-4 bg-[#121212] border border-[#444] rounded-l-lg text-white focus:outline-none"
          type="text"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#065fd4] text-white rounded-r-lg hover:bg-[#004ecb] transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
