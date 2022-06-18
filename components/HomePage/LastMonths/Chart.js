import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import chart from "./lastMonths.module.css";
import { options } from "../../../data/monthsChart";

export default function Chart({ data }) {
  return (
    <div className={chart.container}>
      <Bar data={data} options={options} />
    </div>
  );
}
