// frontend/src/components/Button.js
import React from "react";

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      {text}
    </button>
  );
};

export default Button;
