/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ foodData }) => {
  return <Pie data={foodData} />;
};

export default PieChart;
