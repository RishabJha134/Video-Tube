import React from "react";

const Button = ({ name }) => {
  return (
    <button className="  font-semibold py-2 px-4 rounded-xl bg-zinc-800 transition duration-200 text-white hover:bg-white hover:text-black">
      {name}
    </button>
  );
};

export default Button;
