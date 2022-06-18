import React from "react";
import months from "./lastMonths.module.css";
import Chart from "./Chart";

export default function LastMonths({ chartD }) {
  const _chartD = chartD.slice().sort((a, b) => a.month - b.month);
  const data = {
    labels: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    datasets: [
      {
        data: [
          _chartD[0]?.count,
          _chartD[1]?.count,
          _chartD[2]?.count,
          _chartD[3]?.count,
          _chartD[4]?.count,
          _chartD[5]?.count,
          _chartD[6]?.count,
          _chartD[7]?.count,
          _chartD[8]?.count,
          _chartD[9]?.count,
          _chartD[10]?.count,
          _chartD[11]?.count,
        ],
        backgroundColor: ["#111111", "#666666", "#0081ef"],
      },
    ],
  };

  return (
    <div className={months.mainContainer}>
      <h1>Orders In Last Months</h1>
      <Chart data={data} />
    </div>
  );
}
