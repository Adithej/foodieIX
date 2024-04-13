import axios from "axios";
import conf from "../conf/conf";

export const fetchCommonItem = async (item, setNutrition) => {
  try {
    const response = await axios.post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      {
        query: item.food_name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": conf.nutritionAppID,
          "x-app-key": conf.nutritionAppKey,
        },
      }
    );
    console.log("res", response.data);
    setNutrition(response.data);
  } catch (error) {
    console.error(error);
  }
};
