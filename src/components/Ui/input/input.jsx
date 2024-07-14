// Input.jsx
import React from "react";

export const Input = ({ value, onChange, placeholder, type = "text", className }) => {
  return (
    <div className="relative">
      <input
        className={`w-full border border-gray-300 rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
