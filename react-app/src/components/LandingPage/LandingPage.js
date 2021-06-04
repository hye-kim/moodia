import React from "react";
import Jumbotron from "./Jumbotron";
import LandingCard from "./LandingCard";
import LandingNavBar from "./LandingNavBar";
import moodImg from "../../images/landing-mood.png";
import habitImg from "../../images/landing-habits.png";

function LandingPage({ user }) {
  return (
    <div>
      <section className="flex flex-col items-center">
        <LandingNavBar user={user} />
        <div className="flex flex-col items-center md:mt-10">
          <div className="my-10">
            <Jumbotron />
          </div>
          {/* <img
              className="shadow-lg rounded-lg w-11/12 md:w-3/5"
              src={require("../public/static/imgs/landing-home.jpg")}
            ></img> */}
        </div>
      </section>
      <section className="flex flex-col items-center my-28">
        <LandingCard
          description="Simply enter how you feel and visualize how you've been."
          title="Track Your Mood"
          child={<img src={moodImg} alt="moods" className="max-w-xs md:max-w-xl"></img>}
        ></LandingCard>
        <LandingCard
          title="Plan Your Day"
          reverse={true}
          description="It's important to build good habits. Organize your morning and evening routines with Moodia."
          child={<img src={habitImg} alt="habits" className="max-w-xs md:max-w-xl"></img>}
        ></LandingCard>
      </section>
    </div>
  );
}

export default LandingPage;
