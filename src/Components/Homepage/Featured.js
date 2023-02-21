import React from "react";
import Card9 from "./Card9";

const Featured = () => {
  return (
    <div className="flex justify-center py-10 bg-white">
      <div className="w-8/12 flex justify-between ">
        <div className="">
          <h1 className="text-2xl border-b border-[#C82020] pb-2">
            <span className="text-[#C82020]">Featured</span> Products
          </h1>
          {/* img, name, seller, old, price */}
          <Card9
            img={"Featured1.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"featured2.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"featured3.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
        </div>

        <div>
          <h1 className="text-2xl">
            <span className="text-[#C82020]">On Sale</span> Products
          </h1>
          <Card9
            img={"Featured4.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"featured5.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"featured6.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
        </div>
        <div>
          <h1 className="text-2xl">
            <span className="text-[#C82020]">Top Rated</span> Products
          </h1>
          <Card9
            img={"featured7.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"featured8.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
          <Card9
            img={"Featured9.png"}
            seller={"Bin Bakar Electronics"}
            name={"Samsung 40N5300 S.."}
            old={"Rs.70,000"}
            price={"Rs.60,000"}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
