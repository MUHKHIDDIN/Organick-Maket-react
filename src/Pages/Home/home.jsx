import React from "react";
import { Hero } from "../../components/hero/hero";
import { Fresh } from "../../components/fresh/fresh";
import { Farmers } from "../../components/farmers";
import { ProductData } from "../../Data/product";
import { Link } from "react-router-dom";
import { Button } from "../../components/Ui/Button";

export const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Fresh />
      </section>
      <section>
        <Farmers />
      </section>
      <section>
        <div className="container mx-auto pb-[150px]">
          <p className="font-[400px] text-[36px] text-center text-[#68a47f] mb-[8px]">
            Categories
          </p>
          <h1 className="font-[800px] text-[50px] text-center text-[#274c5b] mb-[70px]">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-[100px] ">
            {ProductData.map((item) => (
              <Link to={`/products/shopsingle/${item.id}`} key={item.id}>
                <div className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-[300px] bg-[: #f9f8f8]   ">
                  <h1 className="font-[600px] text-[15px] bg-[#274c5b] w-[80px] text-center rounded-lg text-white mb-[20px]">
                    {item.category}
                  </h1>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 "
                  />
                  <h1 className="font-bold text-lg text-[#274c5b] mb-2">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-gray-800">
                        ${item.currentPrice}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          ${item.originalPrice}
                        </p>
                      )}
                    </div>
                    <p className="text-[#ffa858]">{item.rating}★</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <span>
            <Button
              variant={
                "pt-[20px] pb-[20px] pl-[40px] pr-[40px] bg-[#274c5b] text-white rounded-[16px] font-[500px] text-[16px] ml-[600px]"
              }
            >
              Load More
            </Button>
          </span>
        </div>
      </section>
    </div>
  );
};
