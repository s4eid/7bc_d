import { useEffect, useState } from "react";
export default function useChart(date) {
  const [_data, setData] = useState([]);
  let months = [
    { month: 0, count: 0 },
    { month: 1, count: 0 },
    { month: 2, count: 0 },
    { month: 3, count: 0 },
    { month: 4, count: 0 },
    { month: 5, count: 0 },
    { month: 6, count: 0 },
    { month: 7, count: 0 },
    { month: 8, count: 0 },
    { month: 9, count: 0 },
    { month: 10, count: 0 },
    { month: 11, count: 0 },
  ];

  useEffect(() => {
    const getDates = () => {
      for (let i = 0; i < date.length; i++) {
        let m = new Date(JSON.parse(date[i].month));
        let currnetM = m.getMonth();
        months[currnetM].count = date[i].count;
      }
      setData(months);
    };
    getDates();
  }, [date]);
  return { _data };
}
