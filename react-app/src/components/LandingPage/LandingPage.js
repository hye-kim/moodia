import React from "react";
import Jumbotron from "./Jumbotron";
import LandingCard from "./LandingCard";
import LandingNavBar from "./LandingNavBar";
import moodImg from "../../images/landing-mood.png";
import habitImg from "../../images/landing-habits.png";
import goalImg from "../../images/landing-goals.png";
import Footer from "../Footer/Footer";

function LandingPage({ user }) {
  return (
    <div>
      <section className="flex flex-col items-center">
        <LandingNavBar user={user} />
        <div className="flex flex-col items-center md:mt-10">
          <div className="my-10">
            <Jumbotron user={user} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center my-28">
        <LandingCard
          description="Simply enter how you feel and visualize how you've been."
          title="Track Your Mood"
          child={
            <img
              src={moodImg}
              alt="moods"
              className="max-w-xs md:max-w-xl"
            ></img>
          }
        ></LandingCard>
        <LandingCard
          title="Plan Your Day"
          reverse={true}
          description="It's important to build good habits. Organize and stay on top of your day."
          child={
            <img
              src={habitImg}
              alt="habits"
              className="max-w-xs md:max-w-xl"
            ></img>
          }
        ></LandingCard>
        <LandingCard
          title="Set Goals"
          description="Be goal-oriented! Keep up to date with the progress on your goals."
          child={
            <img
              src={goalImg}
              alt="goals"
              className="max-w-xs md:max-w-xl"
            ></img>
          }
        ></LandingCard>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
