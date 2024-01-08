import React from "react";
import Background from "/profile/img-home.jpg";

import Blogs from "./Blogs";
import Category from "./Category";
import Features from "./Features";
import Feedback from "./Feedback";
import Form from "./Form";
import Gallery from "./Gallery";
import Packages from "./Packages";
const home = () => {
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px]"></div>
          <img
            className="home-background w-full h-full object-cover"
            src={Background}
            alt="error"
          />
          <div className="absolute w-full top-[20%] p-5 mt-5 md:p-8">
            <h1 className="text-3xl md:text-5xl font-primary1">
              Escape the ordinary, embrace the extraordinary
            </h1>
            <h6 className=" text-base md:text-5xl py-2 font-primary">
              Explore More
            </h6>
          </div>
        </div>
      </div>
      <Category />
      <Packages />
      <Features />
      <Blogs />
      <Gallery />
      <Form />
      <Feedback />
    </>
  );
};
export default home;
