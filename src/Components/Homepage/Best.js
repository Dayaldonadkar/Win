import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Card4 from "./Card4";
import Card3 from "./Card3";
import Card5 from "./Card5";
import Card6 from "./Card6";

const Best = () => {
  return (
    <div className="flex justify-center bg-[#F6F6F6] py-20">
      <div className="w-9/12">
        <div className="flex justify-between">
          <h1 className="text-3xl pb-10">
            <span className="text-[#00CAD7]">Best</span>
            <span>Deals</span>
          </h1>

          <div className="flex">
            <div className="flex justify-between w-11/12 space-x-8">
              <p>KITCHEN Appliances</p>
              <p>CONSOLES</p>
              <p>TV & VIDEOS</p>
              <p>CELL PHONES</p>
              <p>GROCERY</p>
            </div>
            <div>
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="space-y-1">
            <Card3 img={"Laptop2.png"} />
            <Card6 img={"Headphone2.png"} />
          </div>

          <Card4 img={"Watch.png"} />
          <div className="space-y-1">
            <Card3 img={"Clothes.png"} />
            <Card6 img={"Laptop2.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
