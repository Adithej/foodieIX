import "./AnalyticsPage.css";
import { useState } from "react";
import SearchBar from "../componenets/SearchBar";
import SearchList from "../componenets/SearchList";
import Nutrition from "../componenets/Nutrition";

const AnalyticsPage = () => {
  const [data, setData] = useState({ common: [], branded: [] });
  const [nutrition, setNutrition] = useState([]);
  return (
    <div className="main-content">
      <div className="search-content">
        <SearchBar setData={setData} />
        {(data.common && data.common.length > 0) ||
        (data.branded && data.branded.length > 0) ? (
          <SearchList
            data={data}
            setData={setData}
            setNutrition={setNutrition}
          />
        ) : null}
      </div>
      <div className="nutrition-content">
        <Nutrition nutrition={nutrition} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
