import React from "react";
import "@toast-ui/chart/dist/toastui-chart.css";
import { ColumnChart } from "@toast-ui/react-chart";

function ChartView() {
  const data = {
    categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      {
        name: "Budget",
        data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
      },
      {
        name: "Income",
        data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
      },
      {
        name: "Expenses",
        data: [4000, 4000, 6000, 3000, 4000, 5000, 7000],
      },
      {
        name: "Debt",
        data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
      },
    ],
  };
  const options = {
    chart: { title: "Monthly Revenue", width: "auto", height: "auto" },
  };
  const ChartStyle = {
    width: "300vw",
    height: "130px",
  };
  return (
    <div
      className="article basic-scroll"
      style={{ overflowX: "scroll", overflowY: "hidden" }}
    >
      <ColumnChart
        style={ChartStyle}
        data={data}
        options={options}
      ></ColumnChart>
    </div>
  );
}

export default ChartView;
