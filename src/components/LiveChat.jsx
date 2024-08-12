import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // API pooling:-
      console.log("API pooling");
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
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          
          dispatch(
            addMessage({
              name: "Rishab Jha",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full flex p-2 ml-2 border border-black"
      >
        <input
          className="w-96 p-1 px-2 bg-zinc-200 border border-zinc-300 "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
