/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchList.css";

const SearchList = ({ data }) => {
  const [list, setList] = useState(1);
  let common = data.common;
  let branded = data.branded;
  console.log("branded- ", branded);

  const renderedCommon = common.slice(0, 10).map((item) => {
    const compositeKey = `${item.tag_id}-${item.food_name}`;
    return <div key={compositeKey}>{item.food_name}</div>;
  });

  const renderedBranded = branded.slice(0, 10).map((item) => {
    return <div key={item.nix_item_id}>{item.food_name}</div>;
  });

  const renderedList = () => {
    if (list === 1) {
      return (
        <>
          <h4 className="result-head">Common</h4>
          <div className="result-list">{renderedCommon}</div>
          <h4 className="result-head">Branded</h4>
          <div className="result-list">{renderedBranded}</div>
        </>
      );
    } else if (list === 2) {
      return (
        <>
          <h4 className="result-head">Common</h4>
          <div className="result-list">{renderedCommon}</div>
        </>
      );
    } else if (list === 3) {
      return (
        <>
          <h4 className="result-head">Branded</h4>
          <div className="result-list">{renderedBranded}</div>
        </>
      );
    }
    return null; // Handle unexpected list values
  };

  return (
    <div className="search-results">
      <div className="option-btn">
        <button value={1} onClick={() => setList(1)}>
          All
        </button>
        <button value={2} onClick={() => setList(2)}>
          Common
        </button>
        <button value={3} onClick={() => setList(3)}>
          Branded
        </button>
      </div>
      {renderedList()}
    </div>
  );
};

export default SearchList;
