export const data = {
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
      // label: "Using Tech",
      data: [78.5, 2.9, 18.6],
      backgroundColor: ["#111111", "#666666", "#0081ef"],
    },
  ],
};
export const options = {
  title: {
    display: true,
    text: "Largest Cities In ",
    fontSize: 25,
  },
  legend: {
    display: true,
    position: "botton",
  },
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
