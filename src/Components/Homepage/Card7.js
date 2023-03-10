import React from "react";

const Card7 = ({ img, price }) => {
  return (
    <div className="">
      <div className="dark:text-white">
        <img className="rounded-full" src={img} />
        <div className="flex flex-col items-center">
          <p>Add to Cart</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card7;
