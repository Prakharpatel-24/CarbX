import React from "react";
import { Line } from "react-chartjs-2";

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
// Template to create Graphs
const LineChart = (props) => (
  <>
    <Line
      data={{
        labels: props.xaxis,
        datasets: [
          {
            label: props.title,
            data: props.calories,
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
          },
        ],
      }}
      options={options}
    />
  </>
);

export default LineChart;
