import React, { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../../store/habit";
import PageHeading from "../Elements/PageHeading";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";

function HabitPage({ user }) {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:justify-between w-full md:my-6 md:ml-5">
      <PageHeading title="Habits" />
      <div className="flex flex-row mt-5">
        <div className="flex flex-col w-1/2">
          {Object.values(habits).map((habit) => {
            return (
              <Zoom key={habit.id} duration={500}>
                <HabitCard habit={habit} />
              </Zoom>
            );
          })}
        </div>
        <div className="ml-10 mt-2 w-2/5">
          <Zoom duration={500}>
            <HabitForm user={user} />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default HabitPage;
