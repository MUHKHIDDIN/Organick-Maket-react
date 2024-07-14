import React from "react";
import { Button } from "../../components/Ui/Button";

export const Hero = () => {
  return (
    <div className="pb-[100px]">
      <div className=" bg-[url('hero-bg.png')] bg-cover bg-center pt-[250px] pb-[250px] mx-auto ">
        <div className="container ">
          <h1 className="font-[400px] text-[20px] text-[#68a47f] mb-[8px]">
            100% Natural Food
          </h1>
          <p className="text-5xl font-extrabold w-[426px] mb-[70px]  text-[#274c5b]">
            Choose the best healthier way of life
          </p>
          <span className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-[#274c5b]  bg-[#efd372] rounded-[16px]">
            <Button>Explore Now</Button>
          </span>
        </div>
      </div>
    </div>
  );
};
