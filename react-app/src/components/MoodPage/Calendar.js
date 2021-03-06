import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarDay from "./CalendarDay";
import { emoteColors } from "../Icons/Icons";

function Calendar({ date, setDate, moodData }) {
  const daysPerMonth = [
    31,
    date.getFullYear() % 4 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const calendarItems = [];
  for (
    let i = 0;
    i <= daysPerMonth[startMonth.getMonth()] + startMonth.getDay() - 1;
    i++
  ) {
    if (i < startMonth.getDay()) {
      calendarItems.push(<div key={i}></div>);
    } else {
      const calendarPos = i - startMonth.getDay() + 1;
      const c =
        !moodData[calendarPos]
          ? "white"
          : emoteColors[moodData[calendarPos]?.rating + 2];
      calendarItems.push(
        <CalendarDay
          key={i}
          color={c}
          day={calendarPos}
          date={date}
          setDate={setDate}
        />
      );
    }
  }

  const changeMonth = (difference) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let newMonth = currentMonth + difference;
    let newYear = currentYear;
    if (newMonth === -1 || newMonth === 12) {
      if (newMonth === -1) {
        newMonth = 11;
      } else {
        newMonth = 0;
      }
      newYear = currentYear + difference;
    }

    setDate(new Date(newYear, newMonth, 1));
  };

  return (
    <div className="px-8 py-4 mt-5 md:w-full bg-white rounded-xl shadow-md">
      <div className="flex justify-between mt-3 mb-5">
        <button
          className="cursor-pointer outline-none"
          onClick={() => {
            changeMonth(-1);
          }}
        >
          &lt;
        </button>
        <DatePicker
          className="text-center bg-white font-sans-secondary text-lg font-bold text-gray-700"
          selected={date}
          onChange={(date) => {
            setDate(date);
          }}
        />
        <button
          className="cursor-pointer outline-none"
          onClick={() => {
            changeMonth(1);
          }}
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="text-sm text-gray-400">Sun</div>
        <div className="text-sm text-gray-400">Mon</div>
        <div className="text-sm text-gray-400">Tue</div>
        <div className="text-sm text-gray-400">Wed</div>
        <div className="text-sm text-gray-400">Thu</div>
        <div className="text-sm text-gray-400">Fri</div>
        <div className="text-sm text-gray-400">Sat</div>
        {calendarItems}
      </div>
    </div>
  );
}

export default Calendar;
