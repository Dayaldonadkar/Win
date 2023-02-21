import React from "react";
import Browse from "./Homepage/Browse";
import Laptop from "./Homepage/Laptop";
import Navbar from "./Homepage/Navbar";
import Category from "./Homepage/Category";
import Dealsoftheday from "./Homepage/Dealsoftheday";
import NewArrivals from "./Homepage/NewArrivals";
import Our from "./Homepage/Our";
import Best from "./Homepage/Best";
import Save10 from "./Homepage/Save10";
import Phones from "./Homepage/Phones";
import Featured from "./Homepage/Featured";
import Footer from "./Homepage/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Browse />
      <Laptop />
      <Category />
      <Dealsoftheday />
      <NewArrivals />
      <Our />
      <Best />
      <Save10 />
      <Phones />
      <Featured />
      <Footer />
    </div>
  );
};

export default Homepage;
