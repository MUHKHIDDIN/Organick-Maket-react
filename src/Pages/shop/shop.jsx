import React from "react";
import { Shopp } from "../../components/shop";
import { ProductData } from "../../Data/product";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <div>
      <section>
        <Shopp />
      </section>
      <section>
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
      
          </div>
        </section>
      </section>
    </div>
  );
};
