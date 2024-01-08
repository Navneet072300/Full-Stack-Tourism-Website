import React from "react";
import images from "../components/gimages";
const Gallery = () => {
  document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (event) => {
      const image = event.target.getAttribute("src");
      event.target.setAttribute("src", image);
    });
  });

  return (
    <>
      <div className=" mx-5 my-5 p-3">
        <h1 className="commom-heading">Our Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4 cursor-pointer">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour1}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour12}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour3}
                alt="#"
              />
            </div>
          </div>
          <div className="grid gap-4  cursor-pointer">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour10}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour2}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour7}
                alt="#"
              />
            </div>
          </div>
          <div className="grid gap-4  cursor-pointer">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour5}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour8}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour9}
                alt="#"
              />
            </div>
          </div>
          <div className="grid gap-4  cursor-pointer">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour4}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour11}
                alt="#"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={images.tour13}
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
