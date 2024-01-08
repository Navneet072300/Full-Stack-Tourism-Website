import React from "react";

const Blogs = () => {
  const details = [
    {
      title: "Title of the Blog",
      image: "/cat-images/tour16.jpg",
      profile: "/profile/profile1.jpg",
      date: "7d",
      author: "Cheems",
      place: "Ladak",
    },
    {
      title: "Title of the Blog",
      image: "/cat-images/tour14.jpg",
      profile: "/profile/profile2.jpg",
      date: "5d",
      author: "Chimki",
      place: "Gulmerg",
    },
    {
      title: "Title of the Blog",
      image: "/cat-images/tour15.jpg",
      profile: "/profile/profile3.jpg",
      date: "1d",
      author: "Vimdhayak",
      place: "Sikkim",
    },
  ];

  return (
    <>
      <div className="mx-5 my-5 bg-white p-3">
        <h1 className="commom-heading mx-4">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((d, index) => (
            <div
              key={index}
              className="relative group overflow-hidden hover:opacity-70"
            >
              <a href="#">
                <img
                  className="rounded-lg w-full h-[300px] object-cover cursor-pointer"
                  src={d.image}
                  alt="Blog Image"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center ml-4 gap-2">
                  <img
                    className="client-profile w-12 h-12 rounded-full"
                    src={d.profile}
                    alt="Rounded avatar"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{d.author}</p>
                    <span className="text-white text-sm font-medium">
                      {d.date}
                    </span>
                  </div>
                </div>
                <h3 className="absolute text-white text-lg font-semibold top-3 left-3">
                  {d.place}
                </h3>
                <h3 className="absolute text-white text-xl font-semibold top-16 left-4">
                  {d.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
