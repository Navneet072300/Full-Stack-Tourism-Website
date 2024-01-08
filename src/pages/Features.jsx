import React from "react";

const Features = () => {
  const features = [
    {
      name: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium inventore numquam, quod provident quae excepturi  voluptatibus. Non, quibusdam iusto! Alias accusantium iste quidem eligendi veritatis repellat dignissimos? Itaque!",
    },
    {
      name: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium inventore numquam, quod provident quae excepturi  voluptatibus. Non, quibusdam iusto! Alias accusantium iste quidem eligendi veritatis repellat dignissimos? Itaque!",
    },
    {
      name: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium inventore numquam, quod provident quae excepturi  voluptatibus. Non, quibusdam iusto! Alias accusantium iste quidem eligendi veritatis repellat dignissimos? Itaque!",
    },
  ];
  return (
    <>
      <div className="mx-5 my-5">
        <h1 className="commom-heading">Our Features</h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          {features.map((d) => (
            <div className="feature-container max-w-sm mx-auto lg:mx-3 mb-5 lg:mb-0">
              <div className="card p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {d.name}
                  </h5>
                  <p>{d.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
