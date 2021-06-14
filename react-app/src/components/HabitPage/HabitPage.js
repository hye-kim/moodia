import React from "react";
import { Zoom } from "react-awesome-reveal";
import PageHeading from "../Elements/PageHeading";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";

function HabitPage({ user }) {
  return (
    <div className="flex flex-col w-full md:py-6">
      <PageHeading title="Habits" />
      <div className="flex flex-row mt-5">
        <div className="flex flex-col w-1/2">
          {/* <Zoom duration={500}>
            <HabitCard />
          </Zoom> */}
        </div>
        <div className="ml-10 mt-2 w-2/5">
          <Zoom duration={500}>
            <HabitForm />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default HabitPage;
