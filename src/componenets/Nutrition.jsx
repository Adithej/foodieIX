import { useState } from "react";
import "./Nutrition.css";
import PieChart from "./PieChart";
/* eslint-disable react/prop-types */

const Nutrition = ({ nutrition }) => {
  const [foodData, setFoodData] = useState({
    labels: [], // Initialize labels as an empty array
    dataSets: {
      label: "Nutrient %",
      data: [], // Initialize data as an empty array
    },
  });
  // Check if nutrition data exists before accessing it
  if (!nutrition || !nutrition.foods || nutrition.foods.length === 0) {
    return <p>No nutrition data available.</p>;
  }

  // Access the first food item (assuming single item response)
  const food = nutrition.foods[0];

  const data = [
    {
      id: 1,
      label: "Calories",
      item: food.nf_calories ?? 0,
    },
    {
      id: 2,
      label: "Cholesterol",
      item: food.nf_cholesterol ?? 0,
    },
    {
      id: 3,
      label: "Dietary Fiber",
      item: food.nf_dietary_fiber ?? 0,
    },
    {
      id: 4,
      label: "Fat", // Assuming this refers to dietary fat
      item: food.nf_fat ?? 0, // Handle missing property
    },
    {
      id: 5,
      label: "Potassium",
      item: food.nf_potassium ?? 0,
    },
    {
      id: 6,
      label: "Protein",
      item: food.nf_protein ?? 0,
    },
    {
      id: 7,
      label: "Saturated Fat",
      item: food.nf_saturated_fat ?? 0,
    },
    {
      id: 8,
      label: "Sodium",
      item: food.nf_sodium ?? 0,
    },
    {
      id: 9,
      label: "Sugars",
      item: food.nf_sugars ?? 0,
    },
    {
      id: 10,
      label: "Carbohydrate",
      item: food.nf_total_carbohydrate ?? 0,
    },
    {
      id: 11,
      label: "Total Fat",
      item: food.nf_total_fat ?? 0,
    },
  ];

  setFoodData({
    labels: data.map((food) => food.label),
    dataSets: {
      label: "Nutrient %",
      data: data.map((food) => food.item),
    },
  });

  return (
    <div>
      <div className="nutri-card">
        <img src={food.photo.thumb} alt="food_name" />
        <div className="nutri-details">
          <h2>{food.food_name.toUpperCase()}</h2>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quod dolorem quaerat excepturi, officia autem culpa voluptatem
            mollitia suscipit ipsa incidunt minus earum exercitationem natus
            cum. Rem facilis consectetur magni perspiciatis culpa. Laudantium
            illum provident voluptatum ab non asperiores? Accusantium culpa
            minima voluptates consequuntur voluptatum iure eligendi, maiores
            magnam deleniti.
          </p>
        </div>
      </div>
      <PieChart foodData={foodData} />
    </div>
  );
};

export default Nutrition;
