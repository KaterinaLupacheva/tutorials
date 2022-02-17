import Highcharts from "highcharts";

export const lineChartOptions: Highcharts.Options = {
  title: {
    text: "Chart 1",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3, 8, 4, 7],
    },
    {
      type: "line",
      data: [5, 7, 6, 9, 5, 4],
    },
  ],
};

export const barChartOptions: Highcharts.Options = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Chart 2",
  },
  series: [
    {
      name: "Year 1800",
      type: "column",
      data: [107, 31, 635, 203, 2],
    },
    {
      name: "Year 1900",
      type: "column",
      data: [133, 156, 947, 408, 6],
    },
    {
      name: "Year 2000",
      type: "column",
      data: [814, 841, 3714, 727, 31],
    },
    {
      name: "Year 2016",
      type: "column",
      data: [1216, 1001, 4436, 738, 40],
    },
  ],
};

export const columnChartOptions: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Monthly Average Rainfall",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    crosshair: true,
  },
  series: [
    {
      name: "Tokyo",
      type: "column",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      name: "New York",
      type: "column",
      data: [
        83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
        92.3,
      ],
    },
    {
      name: "London",
      type: "column",
      data: [
        48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,
      ],
    },
    {
      name: "Berlin",
      type: "column",
      data: [
        42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,
      ],
    },
  ],
};
