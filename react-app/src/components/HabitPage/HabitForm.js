import React, { useState } from "react";
import Button from "../Elements/Button";

function HabitForm() {
  const [body, setBody] = useState("");

  return (
    <form className="flex flex-col w-full mb-3 p-5 rounded-xl shadow-md bg-white">
      <label
        htmlFor="add-habit"
        className="w-full p-2 rounded-md font-semibold text-md text-highlight"
      >
        Add item:
      </label>
      <input
        name="add-habit"
        required
        placeholder="Add item: "
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="transition duration-300 p-1 my-2 bg-white border-b border-gray-400 focus:border-highlight focus:outline-none"
      ></input>
      <div className="flex mt-4 w-full">
        <Button text="Add" />
      </div>
    </form>
  );
}

export default HabitForm;
