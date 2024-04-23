/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <div style={{ background: "white" }}>
      <h2>Pie Chart</h2>
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
    </div>
  );
};
