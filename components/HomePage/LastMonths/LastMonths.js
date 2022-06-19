import React from "react";
import months from "./lastMonths.module.css";
import Chart from "./Chart";
import useChart from "../../../Hooks/useChart";

export default function LastMonths({ chartD }) {
  // console.log(chartD);
  // const _chartD = chartD.slice().sort((a, b) => a.month - b.month);
  const { _data } = useChart(chartD);
  // console.log(_data);
  // let _month = new Date(JSON.parse(_chartD[0].month));
  // let month = _month.getMonth();
  // console.log(month);
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
          _data[0]?.count,
          _data[1]?.count,
          _data[2]?.count,
          _data[3]?.count,
          _data[4]?.count,
          _data[5]?.count,
          _data[6]?.count,
          _data[7]?.count,
          _data[8]?.count,
          _data[9]?.count,
          _data[10]?.count,
          _data[11]?.count,
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
