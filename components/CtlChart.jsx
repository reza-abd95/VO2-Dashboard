import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { graphic } from "echarts";

function CtlChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vo2.ir/api/getChartsData");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const workoutDays = data?.map((item) => item.workoutDay.substr(0, 10));
  const ctls = data?.map((item) => parseInt(item.ctl));

  const option = {
    color: ["red"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        label: {
          backgroundColor: "red",
        },
      },
    },
    legend: {
      data: ["Line 1"],
    },
    toolbox: {
      feature: {},
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: workoutDays,
        show: false,
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      {
        name: "CTL",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          color: "#DF2063",
          width: 2,
          type: "dashed",
        },

        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#DF2063",
            },
            {
              offset: 1,
              color: "#DF2063",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: ctls,
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} className=" h-96 w-full" />
    </>
  );
}

export default CtlChart;
