import React from "react";

const InputField = (props) => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      required
      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
