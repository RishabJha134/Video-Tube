import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "News",
    "Sports",
    "Education",
    "Entertainment",
    "Business",
    "Olympics",
    "Health",
    "Science",
    "Technology",
    "DSA",
    "Engineering",
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-black">
      {buttonList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
