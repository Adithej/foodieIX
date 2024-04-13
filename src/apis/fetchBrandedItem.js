import axios from "axios";
import conf from "../conf/conf";

export const fetchBrandedItem = async (item, setNutrition) => {
  try {
    const response = await axios.get(
      "https://trackapi.nutritionix.com/v2/search/item/",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-app-id": conf.nutritionAppID,
          "x-app-key": conf.nutritionAppKey,
        },
        params: {
          nix_item_id: item.nix_item_id,
        },
      }
    );
    console.log("res", response.data);
    setNutrition(response.data);
  } catch (error) {
    console.error(error);
  }
};
