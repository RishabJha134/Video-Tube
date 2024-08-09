import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "music",
    "news",
    "sports",
    "Education",
    "Entertainment",
    "Business",
    "Olympic",

    "Health",
    "Science",
    "Technology",
    "Sports",
    "DSA",
    "Engineering",
  ];
  return (
    <>
      <div className="flex">
        {buttonList.map((item, index) => {
          return <Button key={index} name={item} />;
        })}
      </div>
    </>
  );
};

export default ButtonList;
