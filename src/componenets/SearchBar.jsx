import { useState } from "react";
import axios from "axios";
import conf from "../conf/conf";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setData }) => {
  const [term, setTerm] = useState("");

  const fetchValue = async (term) => {
    try {
      const response = await axios.get(
        "https://trackapi.nutritionix.com/v2/search/instant",
        {
          headers: {
            "Content-Type": "apllication/json",
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

  const handleChange = (value) => {
    setTerm(value);
    fetchValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
