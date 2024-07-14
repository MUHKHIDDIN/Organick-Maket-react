import React from "react";
import { Button } from "../Ui/Button";
export const Farmers = () => {
  return (
    <div className="pb-[170px]">
      <div className="pt-[80px] pb-[80px] pr-[260px] bg-[#F9F8F8]  ">
        <div className="container flex justify-between ">
          <div>
            <img src="farmers-img.png" alt="img" />
          </div>
          <div className="w-[700px] mb-[8px]]">
            <p className="font-[400px] text-[20px] text-[#7eb693]">About Us</p>
            <h1 className="text-[#274c5b] text-[50px] font-[800px] mb-[14px]">
              We Believe in Working Accredited Farmers
            </h1>
            <p className="text-[#274c5b] text-[18px] font-[400px] mb-[40px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <ul className="flex  items-center justify-between gap-3 mb-[30px]">
              <li>
                <img src="farmers-img2.svg" alt="img" />
              </li>
              <li>
                <h1 className="font-[800px] text-[20px] text-[#274c5b] mb-[5px]">
                  Organic Foods Only
                </h1>
                <p className="text-[#525c60] text-[18px] font-[400px] w-[440px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </li>
            </ul>
            <ul className="flex  items-center justify-between gap-3 mb-[45px]">
              <li>
                <img src="farmers-img3.svg" alt="img" />
              </li>
              <li>
                <h1 className="font-[800px] text-[20px] text-[#274c5b] mb-[5px]">
                  Quality Standards
                </h1>
                <p className="text-[#525c60] text-[18px] font-[400px] w-[440px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </li>
            </ul>
            <span>
              <Button
                variant={
                  "pt-[20px] pb-[20px] pl-[50px] pr-[50px] bg-[#274c5b] text-[#ffffff] rounded-[16px]"
                }
              >
                ReadShop Now
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
