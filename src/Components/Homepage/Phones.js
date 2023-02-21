import React from "react";
import Card8 from "./Card8";

const Phones = () => {
  return (
    <>
      <div className="flex justify-center bg-[#F5F5F5] py-10 mt-20">
        <h1 className="text-5xl">
          <span className="text-[#00CAD7]">New</span> Arrivals
        </h1>
      </div>
      <div className="flex justify-center bg-gradient-to-r from-purple-600 to-blue-600 py-10">
        <div className="flex justify-between w-10/12">
          <Card8
            img={"Watch3.png"}
            price={"Rs.64202"}
            name={" Nintendo Switch Console"}
            sold={"6"}
            avai={"30"}
            old={"Rs.10258"}
          />

          <Card8
            img={"Phone.png"}
            price={"Rs.64202"}
            name={" Nintendo Switch Console"}
            sold={"6"}
            avai={"30"}
            old={"Rs.10258"}
          />

          <Card8
            img={"Tv.png"}
            price={"Rs.64202"}
            name={" Nintendo Switch Console"}
            sold={"6"}
            avai={"30"}
            old={"Rs.10258"}
          />
        </div>
      </div>
    </>
  );
};

export default Phones;
