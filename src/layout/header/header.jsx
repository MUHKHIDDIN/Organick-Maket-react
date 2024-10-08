import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Ui/input";
import { Button } from "../../components/Ui/Button";
import { Icon1 } from "../../assets/header-icon/icon1.jsx";
import { Icon2 } from "../../assets/header-icon/icon2.jsx";
import { Icon3 } from "../../assets/header-icon/icon3.jsx";

export const Header = () => {
  return (
    <div className="max-w-[1600px] mx-auto flex items-center justify-between pt-[30px] pb-[70px] px-4">
      <div>
        <a href="#">
          <img src="header-logo.svg" alt="logo" className="h-10" />
        </a>
      </div>
      <nav className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-primary hover:text-eigth text-[20px] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-primary hover:text-eigth text-[20px] transition-colors duration-300"
        >
          About
        </Link>
     
        <span>
          <Icon3 />
        </span>
        <Link
          to="/shop"
          className="text-primary hover:text-eigth text-[20px] transition-colors duration-300"
        >
          Shop
        </Link>
      </nav>
      <form className="relative flex-grow max-w-xs mx-4">
        <Input
          className="w-full pt-[20px] pb-[12px] px-4 rounded-full border border-secondary focus:outline-none focus:ring-2  transition-shadow duration-300"
          type="text"
        />
        <span className="absolute right-[-1px] top-1/2 transform -translate-y-1/2 cursor-pointer">
          <Icon1 />
        </span>
      </form>
      <div className="relative flex items-center">
        <span className="font-semibold text-[18px] text-primary border border-sixth rounded-full flex items-center justify-center  px-[20px] transition-colors duration-300 hover:bg-eigth hover:text-white">
          <span className="mr-2">
            <Icon2 />
          </span>
          <Button className="bg-transparent border-none p-0">Cart (0)</Button>
        </span>
      </div>
    </div>
  );
};
