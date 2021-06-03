import React from "react";
import { emoteElements } from "../Icons/Icons";

function MoodRadioInputs({clicked, setClicked}) {
  const iconElementsSelectable = emoteElements.map((ic, idx) => {
    return (
      <div className="flex" key={idx}>
        <input
          type="radio"
          id={`mood-${idx}`}
          name="mood"
          value={idx}
          className="w-0 h-0"
          onClick={() => {
            setClicked(idx);
          }}
        ></input>
        <label
          className={`transition duration-400 border-2 rounded-full shadow-double-xs cursor-pointer hover:border-green-400 ${
            clicked === idx ? "p-1 border-green-400" : "border-white "
          }`}
          htmlFor={`mood-${idx}`}
        >
          {ic}
        </label>
      </div>
    );
  });
  return <ul className="flex justify-between">{iconElementsSelectable}</ul>;
}

export default MoodRadioInputs;
