import axios from "axios";
import conf from "../conf/conf";

export const searchInsatnt = async (term, setData) => {
  try {
    const response = await axios.get(
      "https://trackapi.nutritionix.com/v2/search/instant",
      {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": conf.nutritionAppID,
          "x-app-key": conf.nutritionAppKey,
        },
        params: {
          query: term,
        },
      }
    );
    // console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.log("Error fetching data " + error);
  }
};
