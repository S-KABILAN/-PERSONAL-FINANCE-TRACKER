// frontend/src/components/InputField.js
import React from "react";

const InputField = ({ label, name, type, value, onChange, required }) => {
  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
      />
    </div>
  );
};

export default InputField;
