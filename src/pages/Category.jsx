import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "./../components/images";

const Category = () => {
  const category = [
    {
      img: images.Road,
      name: "Road Trip",
    },
    {
      img: images.Trekking,
      name: "Trekking",
    },
    {
      img: images.Spiritual,
      name: "Spiritual Tour",
    },
    {
      img: images.Group,
      name: "Group Tour",
    },
    {
      img: images.Honeymoon,
      name: "Honeymoon",
    },
    {
      img: images.Party,
      name: "Party",
    },
  ];
  return (
    <>
      <div className="mx-5 my-5">
        <h1 className="commom-heading">Categories</h1>
        <div className="grid-container ">
          <div className="category-container border border-gray-200 rounded-lg">
            {category.map((d) => (
              <a href={`/category/${d.name.toLowerCase()}`} className="cat-box">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={d.img}
                  alt="error"
                />
                <div className="p-3 flex items-center justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {d.name}
                  </h5>
                  <div className="logo-arrow">
                    <FaArrowRightLong />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
