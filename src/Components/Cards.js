import React from "react";

const Cards = ({ Name, img, price1, price2 }) => {
  return (
    <div>
      <div className="border px-3 py-1 space-y-1">
        <h1 className="text-xs">Bin Bakar Electronics</h1>
        <p className="text-[#034E53]">{Name}</p>
        <img src={img} alt="Televison" />
        <p className="space-x-2">
          <span className="text-xs text-[#697475] line-through dark:text-white">
            {price1}
          </span>
          <span className="text-[#034E53]">{price2}</span>
        </p>
        <div className="bg-[#15ADB7] flex justify-center py-2 rounded-sm">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
