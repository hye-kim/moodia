import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createHabit } from "../../store/habit";
import Button from "../Elements/Button";

function HabitForm({ user }) {
  const dispatch = useDispatch();

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const habit = {
      title: body,
      userId: user.id,
    };
    dispatch(createHabit(habit));
    setBody("")
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full mb-3 p-5 rounded-xl shadow-md bg-white"
    >
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
