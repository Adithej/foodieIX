/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Nutrition",
          },
        },
      }}
    />
  );
};
