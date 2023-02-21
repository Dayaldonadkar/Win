import React from "react";
import Card7 from "./Card7";

const Save10 = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="w-8/12 flex flex-col justify-end space-x-20">
        <div className="">
          <button className="bg-[#483D3D]  origin-top-left rotate-90 py-3 px-48 text-white text-xl">
            Save 10%
          </button>
        </div>

        <div className="flex ">
          <div className="-mt-10">
            <div className="flex space-x-20">
              <Card7 img={"Save1.png"} price={"Rs.270"} />
              <Card7 img={"Save2.png"} price={"Rs.270"} />
              <Card7 img={"Save3.png"} price={"Rs.270"} />
              <Card7 img={"Save4.png"} price={"Rs.270"} />
            </div>

            <div className="flex space-x-20">
              <Card7 img={"Save5.png"} price={"Rs.270"} />
              <Card7 img={"Save6.png"} price={"Rs.270"} />
              <Card7 img={"Save9.png"} price={"Rs.270"} />
              <Card7 img={"Save7.png"} price={"Rs.270"} />
            </div>
          </div>
          <div>
            <img src="Save10.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save10;
