import React from "react";
import Cards from "../Cards";

const NewArrivals = () => {
  return (
    <div className="flex justify-center py-12 dark:bg-slate-500">
      <div className="w-10/12">
        <div className="flex justify-between">
          <h1 className="text-3xl dark:text-white">
            <span className="text-[#18A4E8] pr-4">New</span>Arrivals
          </h1>
          <p className="text-xl text-[#18A4E8]">End in: 08 08 08 08</p>
        </div>
        <div className="flex justify-between">
          <Cards
            img={"./Televison.png"}
            Name={"Samsung 40N5300 S.."}
            price1={"Rs.60,000"}
            price2={"Rs.56,000"}
          />
          <Cards
            img={"./WashingM.png"}
            Name={"Samsung Automatic.."}
            price1={"Rs.110,000"}
            price2={"Rs.101.000"}
          />
          <Cards
            img={"./AirC.png"}
            Name={"Haier HSU-12HFMAC .."}
            price1={"Rs.76,000"}
            price2={"Rs.70,000"}
          />
          <Cards
            img={"./Roti.png"}
            Name={"Anex Roti Maker .."}
            price1={"Rs.76,000"}
            price2={"Rs.70,000"}
          />
          <Cards
            img={"./Ac2.png"}
            Name={"Gree GS-12FITH.."}
            price1={"Rs.90,000"}
            price2={"Rs.86,000"}
          />
          <Cards
            img={"./Refri.png"}
            Name={"Gree Air Conditioner.."}
            price1={"Rs.180,000"}
            price2={"Rs.171,000"}
          />
        </div>

        {/* <div className="border ">
          <h1>Bin Bakar Electronics</h1>
          <p>Samsung 40N5300 S..</p>
          <img src="Televison.png" alt="Televison" />
          <p>Rs.56000 Rs.60000</p>
          <button>Add to Cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default NewArrivals;
