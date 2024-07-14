import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Ui/input";
import { Button } from "../../components/Ui/Button";

export const Header = () => {
  return (
    <div className="max-w-[1600px] mx-auto flex items-center justify-between pt-[30px] pb-[70px] px-4">
      <div>
        <img src="header-logo.svg" alt="logo" className="h-10" />
      </div>
      <nav className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-gray-900 text-[20px]">
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-gray-900 text-[20px]"
        >
          About
        </Link>
        <Link
          to="/page"
          className="text-gray-700 hover:text-gray-900 text-[20px] "
        >
          Pages
        </Link>
        <Link
          to="/shop"
          className="text-gray-700 hover:text-gray-900 text-[20px]"
        >
          Shop
        </Link>
        <Link
          to="/project"
          className="text-gray-700 hover:text-gray-900 text-[20px]"
        >
          Project
        </Link>
        <Link
          to="/news"
          className="text-gray-700 hover:text-gray-900 text-[20px]"
        >
          News
        </Link>
      </nav>
      <form className="relative flex-grow max-w-xs mx-4">
        <Input
          className="w-full p-[12px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
        />
      </form>
      <span>
        <Button className="font-semibold text-[18px] text-[#274c5b] py-[12px] px-[24px] border border-[#274c5b] rounded-full flex items-center space-x-2">
          <span>Cart (0)</span>
        </Button>
      </span>
    </div>
  );
};
