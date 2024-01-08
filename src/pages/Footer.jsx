import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="mx-5 my-5 bg-white p-3 flex flex-col lg:flex-row justify-between items-center">
        <div className="left-foot flex items-center font-medium text-lg mb-4 lg:mb-0">
          <MdOutlineCopyright />
          <p className="ml-2">2024 Company, Inc.</p>
        </div>
        <div className="foot-centre text-lg font-medium mb-4 lg:mb-0">
          <span className="foot-centre-icons flex items-center gap-5">
            <FaInstagram />
            <IoLogoYoutube />
            <FaFacebook />
            <FaXTwitter />
          </span>
          <p>Connect with Us</p>
        </div>
        <div>
          <p className="flex items-center text-lg font-medium mb-2 lg:mb-0">
            <IoLogoWhatsapp className="mr-2" /> - +917485961532
          </p>
          <p className="flex items-center text-lg font-medium mb-2 lg:mb-0">
            <IoCall className="mr-2" /> - +917485961532
          </p>
          <p className="flex items-center text-lg font-medium">
            <SiGmail className="mr-2" /> - yatrionyatra@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
