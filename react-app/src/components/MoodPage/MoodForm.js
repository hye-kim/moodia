import React, { useState } from "react";
import Button from "../Elements/Button";
import MoodRadioInputs from "./MoodRadioInputs";

function MoodForm({ date }) {
  const [clicked, setClicked] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICKED IDX", clicked);
    console.log("DATE", date)
  };

  return (
    <div className="flex flex-col items-center w-full mt-12">
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white rounded-lg w-full font-heading"
      >
        <p className="w-full mt-2 mb-4 rounded-md text-md text-highlight">
          How are you?
        </p>
        <MoodRadioInputs clicked={clicked} setClicked={setClicked} />
        <div className="flex justify-between w-1/2 mt-8">
          <Button
            text="Add"
            textSize="xs"
            bgColor="green-400"
            hoverColor="green-200"
          />
        </div>
      </form>
    </div>
  );
}

export default MoodForm;
