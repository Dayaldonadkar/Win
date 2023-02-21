import React from "react";

const Card8 = ({ img, name, price, sold, avai, old }) => {
  return (
    <div className="space-y-5 bg-white rounded-lg px-20 py-5">
      <div className="flex">
        <img src={img} />
        <div>
          <p className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-8 rounded-full flex flex-col">
            <span>Sale</span>
            <span>10%</span>
          </p>
        </div>
      </div>

      <h1 className="text-2xl">{name}</h1>
      <p className="text-[#D22727] text-2xl">
        {price} <span className="line-through text-black">{old}</span>
      </p>
      <div className="text-[#0AAEB9] space-x-3 text-lg">
        <span>Already Sold:{sold}</span>
        <span>Available:{avai}</span>
      </div>
    </div>
  );
};

export default Card8;
