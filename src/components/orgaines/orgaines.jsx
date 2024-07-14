import React from "react";

export const Orgaines = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center ">
      <div className="w-full sm:w-[900px]">
        <img
          className="w-full h-auto rounded-lg"
          src="/orgaines-img.png"
          alt="img"
        />
      </div>
      <div className="container pt-10 pb-10 pl-10 pr-10  w-full sm:w-[700px] rounded-lg bg-nineth ml-[-150px]">
        <p className="text-egith text-xl font-medium mb-2">Eco Friendly</p>
        <h1 className="text-primary text-4xl font-extrabold mb-8">
          Econis is a Friendly Organic Store
        </h1>
        <div>
          <h2 className="text-primary text-lg font-semibold mb-2">
            Start with Our Company First
          </h2>
          <p className="text-seventh text-base mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div>
          <h2 className="text-seventh text-lg font-semibold mb-2">
            Farming Strategies of Today
          </h2>
          <p className="text-primary text-base mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};
