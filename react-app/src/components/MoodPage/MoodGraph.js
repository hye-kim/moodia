import React from "react";
import { Line } from "react-chartjs-2";

function MoodGraph({ date, moodData }) {
  const moodDataArray = Array(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  ).fill(null);
  for (let key in moodData) {
    moodDataArray[key - 1] = moodData[key].rating;
  }

  const data = {
    labels: Array.from(
      {
        length: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      },
      (_, i) => i + 1
    ),
    datasets: [
      {
        label: "Mood",
        data: moodDataArray,
        fill: false,
        backgroundColor: "rgba(93, 189, 210, 1)",
        borderColor: "rgba(93, 189, 210, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());

  return (
    <div className="mt-3 p-3 rounded-xl shadow-md bg-white">
      <Line data={data} options={options} />
    </div>
  );
}

export default MoodGraph;
