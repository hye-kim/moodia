import React from "react";
import { useDispatch } from "react-redux";
import moodiaJumbotron from "../../images/moodia-jumbotron.png";
import { login } from "../../store/session";
import { useHistory } from "react-router";

function Jumbotron() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDemo = async () => {
    await dispatch(login("demo@aa.io", "password"));
    history.push("/dashboard");
  };

  return (
    <div className="text-center">
      <img src={moodiaJumbotron} alt="cow" className="m-auto h-80" />
      <h1 className="mt-12 mb-6 text-4xl md:text-6xl text-gray-700 font-bold">
        Reduce stress. Track your life.
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-500">
        A site to visualize your mood, record your goals, and track your habits.
      </h2>
      <div className="mt-6">
        <button
          onClick={handleDemo}
          className="transition duration-200 mr-2 md:mr-10 px-3 py-1.5 md:px-6 md:py-3 rounded-3xl bg-highlight text-white hover:opacity-50 focus:outline-none"
        >
          Demo Login
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
