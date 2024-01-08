import React from "react";
import Slider from "react-slick";
import pimages from "../components/pimages";
import { IoPricetagOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Packages = () => {
  const category = [
    {
      img: pimages.img1,
      name: "Manali",
      price: 5500,
      date: "11 Feb 2024 - 22 Feb 2024",
    },
    {
      img: pimages.img2,
      name: "Sikkim",
      price: 5500,
      date: "11 Feb 2024 - 22 Feb 2024",
    },
    {
      img: pimages.img3,
      name: "Kashmir",
      price: 5500,
      date: "11 Feb 2024 - 22 Feb 2024",
    },
    {
      img: pimages.img4,
      name: "Kerala",
      price: 5500,
      date: "11 Feb 2024 - 22 Feb 2024",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-5 my-5 bg-white p-3">
        <h1 className="commom-heading">Popular Packages</h1>
        <Slider {...settings}>
          {category.map((d) => (
            <div className="flex justify-between items-center">
              <div className="max-w-sm mx-3 rounded-lg ">
                <figure className="effect-apollo">
                  <a href="#">
                    <img
                      className=" rounded-lg w-[500px] h-[300px]"
                      src={d.img}
                      alt="error"
                    />
                  </a>
                </figure>
                <div className=" top-[15rem] -translate-y-20 bg-black m-3 p-1 rounded-lg flex  items-center cursor-pointer">
                  <h2 className="text-md font-semibold text-white translate-x-7 mr-[10rem]">
                    {d.name}
                  </h2>
                  <IoPricetagOutline className=" pkg-price text-white mr-3" />
                  <BiRupee className=" pkg-price text-white" />
                  <p className=" pkg-price text-white  ">{d.price}</p>
                </div>
                <div className=" flex items-center translate-x-10 -translate-y-10">
                  <CgSandClock />
                  <h3 className=" font-semibold">{d.date}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Packages;
