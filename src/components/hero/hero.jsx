import React from "react";
import { Button } from "../../components/Ui/Button";
import { Icon1 } from "../../assets/hero-icon/icon1.jsx";

export const Hero = () => {
  return (
    <div className="pb-[100px]">
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center pt-[250px] pb-[250px] mx-auto">
        <div className="container">
          <h1 className="font-[400px] text-[20px] text-secondary mb-[8px]">
            100% Natural Food
          </h1>
          <p className="text-5xl font-extrabold w-[426px] mb-[70px] text-primary">
            Choose the best healthier way of life
          </p>
          <span className="flex items-center gap-4 w-[220px] pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-primary bg-third rounded-[16px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-white">
            <Button>Explore Now</Button>
            <span>
              <Icon1 />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
