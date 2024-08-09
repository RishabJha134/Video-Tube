import React from "react";

const Button = ({ name }) => {
  // console.log(name);
  return (
    <div> 
      <button className="px-2 py-1 m-2 rounded-lg bg-gray-200 text-black border border-black">
        {name}
      </button>
    </div>
  );
};

export default Button;
