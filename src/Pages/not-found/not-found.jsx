import React from "react";

export const NotFound = () => {
  return (
    <div className=" container  flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl text-primary font-extrabold tracking-wider mb-8 animate-bounce">
        Page Not Found !!
      </h1>
      <img
        className="w-1/2"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="not found"
      />
    </div>
  );
};
