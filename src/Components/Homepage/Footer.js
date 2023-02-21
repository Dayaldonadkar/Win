import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-[#393939] pt-16">
        <div className="w-10/12 space-y-3 flex justify-around">
          <div className="space-y-5">
            <div className="flex items-center text-xl space-x-2">
              <img className="" src="logo4.png" />
              <span className="text-white font-thin text-base">Store.pk</span>
            </div>
            <h1 className="text-[#00CAD7] text-lg">
              Got questions? Call us 24/7!
            </h1>

            <div className="text-white">
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
            </div>

            <div>
              <h1 className="text-[#00CAD7] text-lg">Contact.info</h1>
              <p className="text-white text-sm">info@winstore.pk</p>
            </div>

            <div className="flex space-x-6 text-white ">
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
              <LinkedInIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
            </div>
          </div>

          <div className="text-white flex w-1/2 justify-between">
            <div className="space-y-6">
              <h1 className="text-[#00CAD7] text-xl">Trending</h1>
              <div className="space-y-4 text-sm font-thin">
                <p>Installments</p>
                <p>Electronics</p>
                <p>Grocery</p>
                <p>Health & Beauty</p>
                <p>Home Appliances</p>
                <p>Mobile accesories</p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-[#00CAD7] text-xl">Information</h1>
              <div className="space-y-4 text-sm font-thin">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>FAQs</p>
                <p>Shipping & Return</p>
                <p>Privacy policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-[#00CAD7] text-xl">Customer Care</h1>
              <div className="space-y-4 text-sm font-thin">
                <p>My Account</p>
                <p>Track Your Order</p>
                <p>Recently Viewed</p>
                <p>Wishlist</p>
                <p>Compare</p>
                <p>Become a Vendor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#393939] pt-10">
        <div className="flex w-8/12 justify-end space-x-3">
          <img
            className="bg-white h-14 px-2 py-3 w-20 rounded-xl"
            src="VISA.png"
          />
          <img className="bg-white h-14 rounded-xl" src="MASTER.png" />
          <img className="bg-white rounded-2xl" src="Cash.png" />
          <img className="bg-white h-14 rounded-xl" src="INSLALLMENTS.png" />
        </div>
      </div>
    </>
  );
};

export default Footer;
