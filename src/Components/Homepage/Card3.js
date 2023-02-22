import React from "react";

const Card3 = ({ img }) => {
  return (
    <div className="flex bg-white h-5/12 p-7 space-x-14 rounded-xl">
      <div className="space-y-2">
        <h1 className="text-lg">Nintendo Switch</h1>
        <h1 className="text-lg">Console </h1>
        <p className="text-3xl text-[#14B1F0]">Rs.65,208 </p>
        <p className="line-through text-sm">Rs.66,000</p>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-center">
          <p>Save</p>
          <p>10%</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="text-4xl text-center">
          <h1 className="text-[#00CAD7]">Special</h1>
          <h1>Offer</h1>
        </div>
        <img className="h-28 rounded-xl" src={img} />
      </div>
    </div>
  );
};

export default Card3;
