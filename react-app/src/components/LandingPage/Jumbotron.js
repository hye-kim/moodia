import React from "react";
import moodiaJumbotron from "../../images/moodia-jumbotron.png";

function Jumbotron() {
  return (
    <div className="text-center">
      <img src={moodiaJumbotron} alt="cow" className="m-auto h-96" />
      <h1 className="my-10 text-4xl md:text-6xl text-gray-700 font-bold">
        Reduce stress. Track your life.
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-500">
        A site to visualize your mood, record your goals, and track your habits.
      </h2>
    </div>
  );
}

export default Jumbotron;
