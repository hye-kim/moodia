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
    response: true,
    maintainAspectRAtio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            min: -2,
            max: 2,
            stepSize: 1,
            callback: function (label, index, labels) {
              switch (label) {
                case -2:
                  return "Sad";
                case -1:
                  return "Unhappy";
                case 0:
                  return "Okay";
                case 1:
                  return "Satisfied";
                case 2:
                  return "Happy";
                default:
                  return;
              }
            },
          },
        },
      ],
    },
  };

  return (
    <div className="mt-3 p-3 rounded-xl shadow-md bg-white">
      <Line data={data} options={options} />
    </div>
  );
}

export default MoodGraph;
