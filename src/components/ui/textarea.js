import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-40"
    />
  );
};

export default TextArea;
