import { useEffect, useState } from "react";
export default function useChart(date) {
  const [_data, setData] = useState([]);
  let months = [
    { month: 0 },
    { month: 1 },
    { month: 2 },
    { month: 3 },
    { month: 4 },
    { month: 5 },
    { month: 6 },
    { month: 7 },
    { month: 8 },
    { month: 9 },
    { month: 10 },
    { month: 11 },
  ];
  useEffect(() => {
    for (let i = 0; i > date.length; i++) {
      let m = new Date(JSON.parse(date[i].month));
      let currnetM = m.getMonth();
      if (currnetM == months[i].month) {
        months[i].count == date[i].count;
      }
    }
    return () => {
      setData(months);
    };
  }, []);
  return { _data };
}
