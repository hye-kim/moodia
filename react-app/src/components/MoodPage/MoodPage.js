import React from "react";
import Calendar from "./Calendar";
import PageHeading from "../Elements/PageHeading";
import { Zoom } from "react-awesome-reveal";
import MoodForm from "./MoodForm";

function MoodPage() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full md:my-6 md:ml-5">
      <div className="w-full md:w-1/2">
        <div>
          <PageHeading title={"Track your mood"} />
          <Zoom duration={500}>
            <Calendar />
          </Zoom>
        </div>
      </div>
      <div className="md:w-2/5">
        <Zoom duration={500}>
            <MoodForm />
        </Zoom>
      </div>
    </div>
  );
}

export default MoodPage;
