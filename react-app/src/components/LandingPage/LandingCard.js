import React from "react";

function LandingCard({ title, description, reverse, child }) {
  return (
    <div className="w-11/12 md:w-2/3 mt-10 p-3 md:p-6 my-6">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : ""
        } md:flex-row items-center justify-around md:text-left text-xl font-light font-sans2 text-gray-500`}
      >
        <div className="max-w-md">
          <h1 className="text-highlight-secondary my-5 text-5xl font-bold text-gray-700">
            {title}
          </h1>
          <p>{description}</p>
        </div>
        {child}
      </div>
    </div>
  );
}

export default LandingCard;
