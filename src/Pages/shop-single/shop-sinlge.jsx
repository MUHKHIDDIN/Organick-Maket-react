import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductData } from "../../Data/product";
import { Button } from "../../components/Ui/Button";

export const ShopSingle = () => {
  const { id } = useParams();
  const data = ProductData.find((item) => item.id == id);

  if (!data) return <div>Product not found</div>;

  const topProducts = ProductData.slice(0, 4);

  return (
    <div>
      <div className="pt-[180px] pb-[180px] pl-[700px] pr-[500px] font-[800px] text-[70px] bg-[url('shop-img.jpg')] bg-cover">
        <h1>Shop Single</h1>
      </div>
      <div className="flex items-center justify-between w-[1337px] mx-auto pb-[90px]">
        <img className="w-[501px] h-[560px]" src={data.img} alt={data.name} />
        <div className="w-[660px]">
          <h1 className="font-[600px] text-[40px] mb-[9px]">{data.name}</h1>
          <p className="text-[#ffa858] mb-[9px]">{data.rating}</p>
          <p>{data.category}</p>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-gray-800">
              ${data.currentPrice}
            </p>
            {data.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${data.originalPrice}
              </p>
            )}
          </div>
          <div className="flex items-center gap-[20px] mt-[30px]">
            <div className="flex items-center gap-4">
              <p>Quantity :</p>
              <Button
                variant={
                  "pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-[#274c5b] rounded-[16px] font-[500px] text-[16px] border border-[#274c5b]"
                }
              >
                1
              </Button>
            </div>
            <Button variant="pt-[20px] pb-[20px] pl-[40px] pr-[40px] bg-[#274c5b] text-white rounded-[16px] font-[500px] text-[16px]">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="container pb-[140px]">
        <div className="flex gap-4 w-[1137px] ml-[350px] text-center">
          <Button
            variant={
              "pt-[15px] pb-[15px] pl-[50px] pr-[50px] bg-[#274c5b] text-white rounded-[16px] font-[700px] text-[25px]"
            }
          >
            Product Description
          </Button>
          <Button
            variant={
              "pt-[15px] pb-[15px] pl-[50px] pr-[50px] bg-[#c3c9c5] text-[#274c5b] rounded-[16px] font-[700px] text-[25px]"
            }
          >
            Additional Info
          </Button>
        </div>
        <p className="text-[#525c60] mt-[30px] text-[18px] font-[400px] text-center w-[1137px] mx-auto">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className="container mx-auto pb-[140px]">
        <h1 className="font-[800px] text-[50px] text-center text-[#274c5b] mb-[70px]">
          Related Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topProducts.map((item) => (
            <Link to={`/products/shopsingle/${item.id}`} key={item.id}>
              <div className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-[300px] ">
                <h1 className="font-[600px] text-[15px] bg-[#274c5b] w-[80px] text-center rounded-lg text-white mb-[20px]">
                  {item.category}
                </h1>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
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
    </div>
  );
};
