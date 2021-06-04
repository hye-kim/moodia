import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createMood, changeMood } from "../../store/mood";
import Button from "../Elements/Button";
import MoodRadioInputs from "./MoodRadioInputs";
import { deleteIconElement } from "../Icons/Icons";

function MoodForm({ date, user, moodData }) {
  const [clicked, setClicked] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    Object.keys(moodData)
      .map((key) => Number(key))
      .includes(date.getDate())
      ? setClicked(moodData[date.getDate()].rating + 2)
      : setClicked(null);
  }, [date, moodData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const moodRating = clicked - 2;
    const mood = {
      date,
      rating: moodRating,
      userId: user.id,
    };
    dispatch(createMood(mood));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const moodRating = clicked - 2;
    const moodId = moodData[date.getDate()]?.id;
    const mood = {
      date,
      rating: moodRating,
      userId: user.id,
      id: moodId,
    };

    dispatch(changeMood(mood));
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
          {!Object.keys(moodData)
            .map((key) => Number(key))
            .includes(date.getDate()) && (
            <Button
              text="Add"
              textSize="xs"
              bgColor="green-400"
              hoverColor="green-200"
            />
          )}
          {Object.keys(moodData)
            .map((key) => Number(key))
            .includes(date.getDate()) && (
            <>
              <Button
                text="Edit"
                textSize="xs"
                bgColor="green-400"
                hoverColor="green-200"
                type="button"
                onClick={handleEdit}
              />
              {deleteIconElement}
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default MoodForm;
