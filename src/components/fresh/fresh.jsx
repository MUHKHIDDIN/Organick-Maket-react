import React from "react";

export const Fresh = () => {
  return (
    <div className="container flex justify-between items-center pb-[190px]">
      <div className="bg-[url('/fresh-img.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-[#ffffff] text-[20px] font-[400px] mb-[5px]">
          Natural!!
        </p>
        <h1 className="text-[#ffffff] text-[35px] font-[800px]">
          Get Garden Fresh Fruits
        </h1>
      </div>
      <div className="bg-[url('/fresh-img2.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-[ #7eb693] text-[20px] font-[400px] mb-[5px]">
          Natural!!
        </p>
        <h1 className="text-[#274c5b] text-[40px] font-[800px]">
          Get 10% off on Vegetables
        </h1>
      </div>
    </div>
  );
};
