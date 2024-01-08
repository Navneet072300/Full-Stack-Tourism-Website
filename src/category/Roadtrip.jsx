import React, { useEffect, useState } from "react";
import { IoMdTrain } from "react-icons/io";
import { FaBus } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const Roadtrip = ({ rowId }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const statedata = [
    {
      img: "/cat-images/tour2.jpg",
      name: "UttraKhand",
    },
    {
      img: "/cat-images/tour3.jpg",
      name: "Sikkim",
    },
    {
      img: "/cat-images/tour4.jpg",
      name: "Kashmir",
    },
    {
      img: "/cat-images/tour5.jpg",
      name: "Ladak",
    },
    {
      img: "/cat-images/tour6.jpg",
      name: "Himachal Pradesh",
    },
    {
      img: "/cat-images/tour7.jpg",
      name: "Banaras",
    },
    {
      img: "/cat-images/tour8.jpg",
      name: "Kerala",
    },
    {
      img: "/cat-images/tour9.jpg",
      name: "Rajasthan",
    },
    {
      img: "/cat-images/tour10.jpg",
      name: "Assam",
    },
  ];
  const populardata = [
    {
      img: "/cat-images/tour1.jpg",
      price: "5500",
    },
    {
      img: "/cat-images/tour13.jpg",
      price: "4300",
    },
    {
      img: "/cat-images/tour12.jpg",
      price: "2800",
    },
    {
      img: "/cat-images/tour11.jpg",
      price: "6000",
    },
    {
      img: "/cat-images/tour10.jpg",
      price: "5200",
    },
  ];

  return (
    <>
      <div className="roadtrip-container">
        <div className="rt-cat-card">
          <div className="  flex items-center group relative ">
            <MdChevronLeft
              onClick={slideLeft}
              className=" bg-black text-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
            <div
              id={"slider" + rowId}
              className=" w-[312px] sm:w-[800px] md:w-[900px] lg:w-[150rem] h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex items-center gap-4"
            >
              {statedata.map((d) => (
                <div className="flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-1/5 ">
                  <a href="">
                    <img src={d.img} alt="" className="w-full h-auto block" />
                    <p className=" ml-[5rem]">{d.name}</p>
                  </a>
                </div>
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              className=" bg-black text-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
          </div>
        </div>
        {populardata.map((d) => (
          <div className="cat-pkg-container flex justify-between flex-shrink">
            <div className="absolute cat-pkg-image flex flex-col">
              <figure>
                <img src={d.img} alt="" />
              </figure>
            </div>
            <div className=" absolute left-[18rem] cat-pkg-details font-semibold">
              <h1 className=" text-3xl text-blue-950">Detination Name</h1>
              <div className=" block tour-packages-list-wrap">
                <div className=" packages-list-wrap">
                  <span>
                    <h2 className=" text-lg font-medium text-blue-950">
                      Duration:
                    </h2>
                    <p> 7hrs</p>
                  </span>
                  <span>
                    <h2 className=" text-lg font-medium text-blue-950">
                      Origin:{" "}
                    </h2>
                    <p>Delhi</p>
                  </span>
                </div>

                <div className=" packages-list-wrap">
                  <span>
                    <h2 className=" text-lg font-medium text-blue-950">
                      Package Code:{"  "}
                    </h2>
                    <p> JB007</p>
                  </span>
                  <span>
                    <h2 className="text-lg font-medium text-blue-950">
                      Destination:{" "}
                    </h2>
                    <p>Manali/Leh/Ladak</p>
                  </span>
                </div>
                <div className=" packages-list-wrap">
                  <span>
                    <h2 className=" text-lg font-medium text-blue-950 ">
                      Departure:{" "}
                    </h2>
                    <p>Weekday</p>
                  </span>
                  <span>
                    <h2 className=" text-lg font-medium text-blue-950">
                      Date of Journey:{" "}
                    </h2>
                    <p>10-Jan-2024</p>
                  </span>
                </div>
                <div className=" flex  items-center gap-3 mt-4">
                  <h3 className=" text-xl font-semibold">Inclusion:</h3>
                  <span className=" text-lg font-normal">
                    <p className="flex items-center gap-2 mx-5">
                      <IoMdTrain />
                      <h6>Train</h6>
                    </p>
                    <p className="flex items-center gap-2 mx-5">
                      <FaBus />
                      <h6>Bus</h6>
                    </p>
                    <p className="flex items-center gap-2 mx-5">
                      <LuHotel />
                      <h6>Hotel</h6>
                    </p>
                    <p className="flex items-center gap-2 mx-5">
                      <GiHotMeal />
                      <h6>Meal</h6>
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className=" absolute cat-pkg-price right-0 mb-10 mr-[4rem] bg-slate-400 h-[265px] w-[12rem] text-center p-7">
              <h2 className=" text-lg font-medium">Starting from</h2>
              <h2 className="flex  justify-center items-center font-medium  text-2xl mt-5 mb-3">
                <BiRupee />

                <h1>{d.price}</h1>
              </h2>
              <a href="" className="text-[#0000FF]">
                View Details
              </a>
              <br />
              <button className=" mt-10">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadtrip;
