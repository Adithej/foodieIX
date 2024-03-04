import "./AnalyticsPage.css";
import { useState } from "react";
import SearchBar from "../componenets/SearchBar";
import SearchList from "../componenets/SearchList";
const AnalyticsPage = () => {
  const [data, setData] = useState({ common: [], branded: [] });
  return (
    <div className="search-content">
      <h2>Type your incredient</h2>
      <SearchBar setData={setData} />
      {(data.common && data.common.length > 0) ||
      (data.branded && data.branded.length > 0) ? (
        <SearchList data={data} />
      ) : null}
    </div>
  );
};

export default AnalyticsPage;
