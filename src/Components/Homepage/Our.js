import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Cards from "../Cards";
import Cards2 from "./Cards2";
import Card4 from "./Card4";

const Our = () => {
  return (
    <div className="flex justify-center bg-[#F6F6F6]">
      <div className="w-9/12 pt-6">
        <div className="flex justify-between pb-10">
          <div>
            <h1 className="text-3xl">
              <span className="text-[#00CAD7]">Our</span> Products
            </h1>
          </div>

          <div className="flex text-xl justify-between w-8/12">
            <div className="flex space-x-10 pl-10">
              <p className="text-[#00CAD7] hover:underline">
                Easy Monthly Installments
              </p>
              <p>On sale</p>
              <p>Top Rated</p>
            </div>

            <div>
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="border p-3">
            <Card4 img={"./Our.png"} />
          </div>
          <div className="space-y-1">
            <div className="flex space-x-8">
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
            </div>

            <div className="flex space-x-8">
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
              <Cards2
                img={"./Televison.png"}
                Name={"Samsung 40N5300 S.."}
                price1={"Rs.60,000"}
                price2={"Rs.56,000"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
