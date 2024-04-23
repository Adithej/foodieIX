import { useState, useEffect } from "react";
import "./Nutrition.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { PieChart } from "./PieChart";
/* eslint-disable react/prop-types */

Chart.register(CategoryScale);

const Nutrition = ({ nutrition }) => {
  console.log("nut- ", nutrition);
  const [isloading, setIsloading] = useState(true);
  const [item, setItem] = useState([]);
  const [chartData, setChartData] = useState(null);

  console.log("nf_calories:", item.nf_calories);

  const Data = [
    {
      id: 1,
      label: "calories",
      value: item.nf_calories ? Math.ceil(item.nf_calories) : 0,
    },
    {
      id: 2,
      label: "cholesterol",
      value: item.nf_cholesterol ? Math.ceil(item.nf_cholesterol) : 0,
    },
    {
      id: 3,
      label: "dietary fibre",
      value: item.nf_dietary_fiber ? Math.ceil(item.nf_dietary_fiber) : 0,
    },
    {
      id: 4,
      label: "p",
      value: item.nf_p ? Math.ceil(item.nf_p) : 0,
    },
    {
      id: 5,
      label: "potassium",
      value: item.nf_potassium ? parseFloat(item.nf_potassium) : 0,
    },
    {
      id: 6,
      label: "protein",
      value: item.nf_protein ? parseFloat(item.nf_protein) : 0,
    },
    {
      id: 7,
      label: "saturated fat",
      value: item.nf_saturated_fat ? parseFloat(item.nf_saturated_fat) : 0,
    },
    {
      id: 8,
      label: "sodium",
      value: item.nf_sodium ? parseFloat(item.nf_sodium) : 0,
    },
    {
      id: 9,
      label: "sugars",
      value: item.nf_sugars ? parseFloat(item.nf_sugars) : 0,
    },
    {
      id: 10,
      label: "total carbohydrate",
      value: item.nf_total_carbohydrate
        ? parseFloat(item.nf_total_carbohydrate)
        : 0,
    },
    {
      id: 11,
      label: "total fat",
      value: item.nf_total_fat ? parseFloat(item.nf_total_fat) : 0,
    },
  ];

  useEffect(() => {
    if (nutrition && nutrition.foods && nutrition.foods.length > 0) {
      setItem(nutrition.foods[0]);
      setIsloading(false);
    }
  }, [nutrition]);

  console.log("item - ", item);

  useEffect(() => {
    // Update chart data whenever item changes
    const newData = {
      labels: Data.map((data) => data.label),
      datasets: [
        {
          label: "Nutrition %",
          data: Data.map((data) => data.value),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    setChartData(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div>
      {isloading ? (
        <div>Loading.... </div>
      ) : (
        <div>
          <div className="nutri-card">
            <img src={item.photo.thumb} alt="food_name" />
            <div className="nutri-details">
              <h2>{item.food_name.toUpperCase()}</h2>
              <p id="info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam ad possimus reprehenderit, unde officiis laboriosam
                eveniet architecto consequuntur quae corrupti?
              </p>
            </div>
          </div>
          <PieChart chartData={chartData} />
        </div>
      )}
    </div>
  );
};

export default Nutrition;
