import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import PageHeading from "../Elements/PageHeading";
import { Zoom } from "react-awesome-reveal";
import MoodForm from "./MoodForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoods } from "../../store/mood";
import MoodGraph from "./MoodGraph";

function MoodPage({ user }) {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const moods = useSelector((state) => state.moods);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  useEffect(() => {
    dispatch(fetchMoods(month, year));
  }, [dispatch, month, year]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:my-6 md:ml-5">
        <div className="w-full md:w-1/2">
          <div>
            <PageHeading title={"Track your mood"} />
            <Zoom duration={500}>
              <Calendar date={date} setDate={setDate} moodData={moods} />
            </Zoom>
          </div>
        </div>
        <div className="md:w-2/5">
          <Zoom duration={500}>
            <MoodForm date={date} user={user} moodData={moods} />
          </Zoom>
        </div>
      </div>
      <div className="md:w-full pb-10 pl-5">
        <Zoom duration={500}>
          <MoodGraph date={date} moodData={moods} />
        </Zoom>
      </div>
    </div>
  );
}

export default MoodPage;
