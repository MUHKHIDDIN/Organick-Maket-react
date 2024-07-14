import React from "react";

export const Customer = () => {
  return (
    <div>
      <div className="pb-[130px] pt-[130px] px-[50px] lg:px-[400px] bg-[url('/customer-img2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1108px] mx-auto">
          <div className="text-center mx-auto mb-[100px]">
            <p className="text-secondary text-[30px] font-normal mb-[8px]">
              Testimonial
            </p>
            <h1 className="text-primary text-[50px] font-bold mb-[40px]">
              What Our Customers Are Saying?
            </h1>
            <img
              className="w-[110px] mx-auto mb-[20px]"
              src="/customer-img.png"
              alt="Customer"
            />
            <img
              className="w-[40px] mx-auto mb-[20px]"
              src="/customer-icon.svg"
              alt="Customer Icon"
            />
            <p className="text-seventh text-[18px] font-normal mb-[20px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h2 className="text-primary text-[25px] font-semibold">
              Sara Taylor
            </h2>
            <p className="text-seventh text-[15px] font-normal mb-[20px]">
              Consumer
            </p>
            <div className="flex justify-center gap-[10px]">
              <span className="w-[15px] h-[15px] bg-fifth rounded-full"></span>
              <span className="w-[15px] h-[15px] bg-secondary rounded-full"></span>
              <span className="w-[15px] h-[15px] bg-fifth rounded-full"></span>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            <li className="border-[4px] border-secondary pt-[50px] pb-[50px] px-[30px] rounded-full text-center">
              <h1 className="text-primary text-[40px] font-bold mb-[8px]">
                100%
              </h1>
              <p className="text-secondary text-[18px] font-normal">Organic</p>
            </li>
            <li className="border-[4px] border-secondary pt-[50px] pb-[50px] px-[30px] rounded-full text-center">
              <h1 className="text-primary text-[40px] font-bold mb-[8px]">
                285
              </h1>
              <p className="text-secondary text-[18px] font-normal">Active</p>
            </li>
            <li className="border-[4px] border-secondary pt-[50px] pb-[50px] px-[30px] rounded-full text-center">
              <h1 className="text-primary text-[40px] font-bold mb-[8px]">
                350+
              </h1>
              <p className="text-secondary text-[18px] font-normal">Organic</p>
            </li>
            <li className="border-[4px] border-secondary pt-[50px] pb-[50px] px-[30px] rounded-full text-center">
              <h1 className="text-primary text-[40px] font-bold mb-[8px]">
                25+
              </h1>
              <p className="text-secondary text-[18px] font-normal">Years of</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
