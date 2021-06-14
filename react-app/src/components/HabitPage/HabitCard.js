import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeHabit,
  changeHabitCompletion,
  createHabitCompletion,
  removeHabit,
} from "../../store/habit";
import Button from "../Elements/Button";
import { deleteIconElement, editIconElement } from "../Icons/Icons";

function HabitCard({ habit }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState(habit.title);
  const [showEdit, setShowEdit] = useState(false);

  const date = new Date();
  const dateNoTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeHabit(habit));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newHabit = { ...habit };
    newHabit.title = body;
    dispatch(changeHabit(newHabit));
    setShowEdit(false);
  };

  const handleCompletion = (e) => {
    e.preventDefault();
    const newHabit = { ...habit };

    newHabit["date"] = dateNoTime;
    if (
      Object.keys(newHabit["habit_completions"]).includes(
        dateNoTime.toUTCString()
      )
    ) {
      newHabit["completed"] = false;
      newHabit["completionId"] =
        newHabit["habit_completions"][dateNoTime.toUTCString()].id;
      dispatch(changeHabitCompletion(newHabit));
    } else {
      newHabit["completed"] = true;
      dispatch(createHabitCompletion(newHabit));
    }
  };

  return (
    <div className="flex justify-between items-center w-full my-3 p-3 rounded-xl shadow-sm bg-white">
      {showEdit && (
        <form
          onSubmit={handleEdit}
          className="flex w-full justify-between items-center"
        >
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
          <div className="pl-3">
            <Button text="Save" bgColor="green-400" />
          </div>
        </form>
      )}
      {!showEdit && (
        <>
          <p
            onClick={handleCompletion}
            className={`transition duration-200 cursor-pointer p-3 rounded-lg text-lg overflow-ellipsis overflow-hidden ${
              habit.habit_completions[dateNoTime.toUTCString()]?.completed === true
                ? "line-through text-gray-300"
                : "text-green-500"
            }`}
          >
            {habit.title}
          </p>
          <div className="flex">
            <div className="px-1.5" onClick={() => setShowEdit(true)}>
              {editIconElement}
            </div>
            <div className="px-1.5" onClick={handleDelete}>
              {deleteIconElement}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HabitCard;
