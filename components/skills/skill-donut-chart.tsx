"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart: React.FC = () => {
  const front = {
    labels: ["JavaScript", "jQuery", "Next.js", "JSP"],
    datasets: [
      {
        label: "Front-end Skills",
        data: [20, 25, 35, 20],
        backgroundColor: ["#8BC1F7", "#06C", "#519DE9", "#004B95"],
        hoverOffset: 4,
      },
    ],
  };

  const back = {
    labels: ["Java", "Spring", "Spring Boot"],
    datasets: [
      {
        label: "Back-end Skills",
        data: [30, 40, 30],
        backgroundColor: ["#A2D9D9", "#009596", "#005F60"],
        hoverOffset: 4,
      },
    ],
  };

  const etc = {
    labels: ["MySQL", "Git", "AWS", "JIRA", "Servicenow"],
    datasets: [
      {
        label: "Other Skills",
        data: [25, 10, 25, 10, 30],
        backgroundColor: [
          "#F4B678",
          "#EF9234",
          "#EC7A08",
          "#C46100",
          "#8F4700",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {};

  return (
    <div className="flex justify-center space-x-8 mb-[200px]">
      <div className="shadow-lg rounded-lg overflow-hidden w-[400px] h-[400px]">
        <div className="py-3 px-5 bg-gray-50 text-center">Front-end</div>
        <div className="p-5">
          <Doughnut data={front} options={options} />
        </div>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden w-[400px] h-[400px]">
        <div className="py-3 px-5 bg-gray-50 text-center">Back-end</div>
        <div className="p-5">
          <Doughnut data={back} options={options} />
        </div>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden w-[400px] h-[400px]">
        <div className="py-3 px-5 bg-gray-50 text-center">Other</div>
        <div className="p-5">
          <Doughnut data={etc} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
