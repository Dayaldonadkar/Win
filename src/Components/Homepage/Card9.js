import React from "react";

const Card9 = ({ img, name, seller, old, price }) => {
  return (
    <div className="flex items-center py-7 space-x-6">
      <img src={img} />

      <div className="space-y-2">
        <h1 className="text-xs">{seller}</h1>
        <p className="text-sm">{name}</p>
        <p className="space-x-2">
          <span className="line-through text-xs text-[#697475]">{old}</span>
          <span className="">{price}</span>{" "}
        </p>

        <button className="bg-[#15ADB7] px-6 py-1 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card9;
